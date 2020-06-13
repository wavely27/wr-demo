/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:37:45
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 15:20:29
 */
import React, { useMemo } from 'react'
import styles from './styles.css'

const AppWrapper = (props) => {
  return useMemo(() => <div className={`wrapper ${styles.wrapper}`}>{props.children}</div>, [])
}
export default AppWrapper