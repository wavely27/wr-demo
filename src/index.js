/*
 * @Author: hongbai
 * @Date: 2020-06-03 18:52:02
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-08 16:29:52
 */ 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import './style/global.css'
import './utils/browser'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
