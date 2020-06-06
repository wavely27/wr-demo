/*
 * @Author: hongbai
 * @Date: 2020-06-05 14:02:07
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-05 20:17:11
 */
import React from 'react'
import styles from './style.css'

export default (props) => {
  return (
    <div className={styles.taskCard}>
      TaskCrad
      {props.color}
      {props.groupName}
      {props.list.map(item => item.taskName)}
    </div>
  )
}