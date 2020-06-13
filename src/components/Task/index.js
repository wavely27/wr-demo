/*
 * @Author: hongbai
 * @Date: 2020-06-05 14:02:07
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 13:19:40
 */
import React, { useContext, useReducer } from 'react'
import { StoreContext } from '@/app'
import styles from './style.css'

export default (props) => {
  const { id, color, task, isDone } = props
  const { dispatch } = useContext(StoreContext)
  console.log('task render ===> ')
  return (
    <div className={styles.task} style={{ color }}>
      <span className={isDone ? styles.textDone : styles.text}>{task}</span>
      <button onClick={() => dispatch({ type: 'UPDATE_TASK', payload: { id, isDone } })}>Up</button>
      <span onClick={() => { console.log('12'); dispatch({ type: 'UPDATE_TASK', payload: { id, isDone } }) }} className={styles.sign} style={{ backgroundColor: (isDone ? color : '#ffffff') }}><span className={`${isDone && styles.signDone}`} /></span>
    </div>
  )
}