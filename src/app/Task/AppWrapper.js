/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:37:45
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-10 12:21:59
 */
import React from 'react'
import styles from './styles.css'
import useScroll from '@/hook/useScroll'

export default (props) => {
  // useScroll()
  return <div className={`wrapper ${styles.wrapper}`}>{props.children}</div>
}