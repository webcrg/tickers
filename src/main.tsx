import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, HashRouter, Route } from 'react-router-dom';
import { AboutPage, PricesPage } from './pages';
import App from './app';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<AboutPage />} />
          <Route path="prices" element={<PricesPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
