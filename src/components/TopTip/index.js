/*
 * @Author: hongbai
 * @Date: 2020-06-05 14:02:07
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-10 11:36:43
 */
import React from 'react'
import styles from './style.css'

export default (props) => {
  const { children } = props
  return (
    <div className={styles.tip}>
      {children}
    </div>
  )
}