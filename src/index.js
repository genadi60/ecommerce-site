import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './data';
import ProductList from './product-list/ProductList';

ReactDOM.render(
  <React.StrictMode>
    <ProductList product={data[0]} />
  </React.StrictMode>,
  document.getElementById('root'));