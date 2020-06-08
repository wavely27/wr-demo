/*
 * @Author: hongbai
 * @Date: 2020-06-05 14:02:07
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-08 11:35:51
 */
import React from 'react'
import styles from './style.css'

export default (props) => {
  const { color, groupName, children } = props
  return (
    <div className={styles.taskCard} style={{ color }}>
      <div className={styles.tap} style={{ backgroundColor: color }}>{groupName}</div>
      <p className={styles.pad} />
      {children}
    </div>
  )
}