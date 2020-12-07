import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import Header from "./Component/Header/Header";
import Category from './Component/Category/Category';
import SideBar from "./Component/Sidebar/Sidebar";
import Lib from './Component/Library/Library';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Category />
    <SideBar />
    <Lib />
  </React.StrictMode>,
  document.getElementById('root')
);

