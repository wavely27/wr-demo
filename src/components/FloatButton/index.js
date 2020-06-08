/*
 * @Author: hongbai
 * @Date: 2020-06-05 14:02:07
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-08 10:52:01
 */
import React from 'react'
import styles from './style.css'

export default (props) => {
  const { children } = props
  return (
    <div className={styles.floatWrap}>
      {children}
    </div>
  )
}