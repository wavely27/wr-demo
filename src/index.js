/*
 * @Author: hongbai
 * @Date: 2020-06-03 18:52:02
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-12 18:00:01
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import './asset/style/global.css'
import './utils/browser'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
