/*
 * @Author: hongbai
 * @Date: 2020-06-05 14:02:07
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 16:09:40
 */
import React, { useContext } from 'react'
import { StoreContext } from '@/app'
import styles from './style.css'
import CheckBox from '@/components/CheckBox'

export default (props) => {
  const { id, color, task, isDone } = props
  const { dispatch } = useContext(StoreContext)
  return (
    <div className={styles.task} style={{ color }}>
      <span className={isDone ? styles.textDone : styles.text}>{task}</span>
      <CheckBox color={color} checked={isDone} handleClick={() => dispatch({ type: 'UPDATE_TASK', payload: { id, isDone: !isDone } })} style={{foneSize: '16px'}} />
    </div>
  )
}