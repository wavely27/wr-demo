/*
 * @Author: hongbai
 * @Date: 2020-06-03 18:52:02
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-17 18:26:11
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'
import App from './app'
import './asset/style/global.css'
import './utils/browser'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
