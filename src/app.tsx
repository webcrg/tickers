import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './shared/header';
import './style/app.scss';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
