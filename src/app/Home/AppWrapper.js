/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:37:45
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-12 15:49:50
 */
import React from 'react'
import styles from './styles.css'

export default (props) => {
  return <div className={`wrapper ${styles.wrapper}`}>{props.children}</div>
}