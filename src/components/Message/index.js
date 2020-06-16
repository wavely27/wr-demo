/*
 * @Author: hongbai
 * @Date: 2020-06-15 09:33:58
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-15 11:21:16
 */
import React from 'react'
import ReactDOM from 'react-dom';
import styles from './style.css'

const Msg = (props) => <div>{props.text}</div>

function createMsg(text, duration) {
  let Ins = null
  let node
  const content = <Msg text={text} />
  const rootDOM = document.querySelector('#root')
  const root2 = document.createElement('div')
  root2.className = 'root2'
  console.log('root2 ===> ', root2)
  rootDOM.appendChild(root2)
  const rootDOM2 = document.querySelector('.root2')
  ReactDOM.render(content, rootDOM2)

  Ins = node

  return Ins
}

const Message = {
  info: function info(text, duration) {
    return createMsg(text, duration)
  }
}

export default Message