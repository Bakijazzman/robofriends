import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardList from './cardList'
import 'tachyons'
import { robots } from './robots'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardList robots = {robots}/>
  </React.StrictMode>
);


reportWebVitals();
