/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:37:45
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-05 14:15:33
 */
import { PlayCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { Input } from 'antd'
import styles from './styles.css'

export default () => {
  const [text, setText] = useState('')

  const onPressEnter = ({ target: { value } }) => {
    console.log('onPressEnter ===> ', value)
  }

  const onChange = ({ target: { value } }) => {
    setText(value)
  }

  return <div className={styles.inputBox}><Input value={text} onChange={onChange} onPressEnter={onPressEnter} /><PlayCircleOutlined /></div>
}