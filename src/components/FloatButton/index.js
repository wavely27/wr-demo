/*
 * @Author: hongbai
 * @Date: 2020-06-05 14:02:07
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 18:29:11
 */
import React from 'react'
import styles from './style.css'

export default (props) => {
  const { children, ...reset } = props
  return (
    <div className={styles.floatWrap} {...reset}>
      {children}
    </div>
  )
}