/*
 * @Author: hongbai
 * @Date: 2020-06-05 14:02:07
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-08 10:35:35
 */
import React from 'react'
import styles from './style.css'

export default (props) => {
  const { color, task, isDone } = props
  return (
    <div className={styles.task} style={{ color }}>
      <span className={isDone ? styles.textDone : styles.text}>{task}</span>
      <span className={styles.sign} style={{ backgroundColor: (isDone ? color : '#ffffff') }}><span className={`${isDone && styles.signDone}`} /></span>
    </div>
  )
}