import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react-lite';
import { Table } from '@/shared/ui/table';
import { Container } from '@/shared/ui/container';
import TickerStore, { ITickerItem } from '@/store/TickerStore';
import { Modal } from '@/shared/ui/modal';

const columns = [
  { label: 'Name', key: 'name' },
  { label: 'Last', key: 'last' },
  { label: 'Highest bid', key: 'highestBid' },
  { label: 'Percent change', key: 'percentChange' },
];

export const PricesPage = observer(() => {
  const { tickerData, isRequestFailed } = TickerStore;
  const [modalActive, setModalActive] = useState(false);
  const [selectedRow, setSelectedRow] = useState<ITickerItem | {}>({});

  useEffect(() => {
    TickerStore.subscribeToTickers();

    return () => TickerStore.unsubscribeFromTickers();
  }, []);

  const rowClickHandler = (row: any) => {
    setSelectedRow(row);
    setModalActive(true);
    TickerStore.unsubscribeFromTickers();
  };

  const modalCloseHandler = () => {
    setModalActive(false);
    TickerStore.subscribeToTickers();
  };

  if (isRequestFailed) {
    return (
      <Container>
        <h2>ошибка</h2>
      </Container>
    );
  }

  return (
    <Container>
      <Table
        columns={columns}
        data={tickerData}
        rowClickHandler={rowClickHandler}
      />
      <Modal active={modalActive} hideModal={modalCloseHandler}>
        <>
          {Object.entries(selectedRow).map(([key, value]) => (
            <p key={nanoid()}>
              <b>{key}: </b>
              <span>{value}</span>
            </p>
          ))}
        </>
      </Modal>
    </Container>
  );
});
