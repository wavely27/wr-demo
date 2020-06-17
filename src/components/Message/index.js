/*
 * @Author: hongbai
 * @Date: 2020-06-15 09:33:58
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-17 16:37:34
 */
import React from 'react'
import ReactDOM from 'react-dom';
import { QuestionCircleTwoTone } from '@ant-design/icons'
import styles from './style.css'

const msgObject = {}

const Msg = (props) => (
  <div className={styles.msg}>
    <QuestionCircleTwoTone />
    &nbsp;&nbsp;
    {props.text}
  </div>
)
function createMsg(text, duration) {
  let Ins = null

  let rootDOM2 = document.querySelector(`.root2`)
  if (!rootDOM2) {
    const root2 = document.createElement('div')
    root2.className = `${styles.root2} root2`
    document.body.appendChild(root2)
    rootDOM2 = document.querySelector(`.root2`)
  }

  const length = Object.keys(msgObject).length
  const key = `${length}_${Math.random().toString().slice(2, 6)}`
  msgObject[key] = (<Msg key={key} text={text} />)

  setTimeout(() => {
    msgObject[key] = null
    render()
    const realLength = Object.values(msgObject).filter(item => item !== null).length
    if (realLength === 0) {
      document.body.removeChild(document.querySelector(`.root2`))
    }
  }, 1000)

  function render() {
    return ReactDOM.render(
      <>{Object.keys(msgObject).map(key => msgObject[key])}</>,
      rootDOM2
    )
  }

  Ins = render()
  return Ins
}

const Message = {
  info: function info(text, duration) {
    return createMsg(text, duration)
  }
}

export default Message