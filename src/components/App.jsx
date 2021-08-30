import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import Content from './content/content';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';


function App() {
  return (<BrowserRouter>
    <div className="background">
      <div className="wrapper">
        <Header />
        <main>
          <Sidebar />
          <Content />
        </main>
        <footer>Copyright @2021</footer>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
