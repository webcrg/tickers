import { makeObservable, observable, action, runInAction } from 'mobx';

const proxy = 'https://webcrg.com/test/cloud.php?url=';

export interface ITickerItem {
  name?: string;
  id: number;
  last: string;
  lowestAsk: string;
  highestBid: string;
  percentChange: string;
  baseVolume: string;
  quoteVolume: string;
  isFrozen: string;
  postOnly: string;
  high24hr: string;
  low24hr: string;
}

interface ITickerDataSource {
  [key: string]: ITickerItem;
}

function convertTickers(data: ITickerDataSource) {
  return Object.entries(data).map(([key, value]) => ({
    name: key,
    ...value,
  }));
}

class TickerStore {
  tickerData: ITickerItem[] = [];

  isRequestFailed: boolean = false;

  timer: any = 0;

  constructor() {
    makeObservable(this, {
      tickerData: observable,
      isRequestFailed: observable,
      subscribeToTickers: action,
      fetchTickers: action,
      unsubscribeFromTickers: action,
    });
  }

  async fetchTickers() {
    try {
      const response = await fetch(
        `${proxy}https://poloniex.com/public?command=returnTicker`
      );
      const data = await response.json();

      runInAction(() => {
        this.isRequestFailed = false;
        this.tickerData = convertTickers(data);
      });
    } catch (error) {
      console.error(error);

      runInAction(() => {
        this.isRequestFailed = true;
      });
    }
  }

  subscribeToTickers() {
    this.fetchTickers();

    this.timer = setInterval(() => {
      console.log('tick');
      this.fetchTickers();
    }, 5000);
  }

  unsubscribeFromTickers() {
    this.timer = clearInterval(this.timer);
  }
}

export default new TickerStore();
