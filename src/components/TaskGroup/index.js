/*
 * @Author: hongbai
 * @Date: 2020-06-05 14:02:07
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-06 10:36:43
 */
import React from 'react'
import styles from './style.css'

export default (props) => {
  const { color, groupName } = props
  return (
    <div className={styles.taskGroup} style={{ backgroundColor: color }}>
      {groupName}
    </div>
  )
}