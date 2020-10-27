import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import Header from "./Component/Header/Header";
import Category from './Component/Category/Category';
import SideBar from "./Component/Sidebar/Sidebar";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Category />
    <SideBar />
  </React.StrictMode>,
  document.getElementById('root')
);

