/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:37:45
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 15:21:42
 */
import React, { useMemo } from 'react'
import styles from './styles.css'

export default (props) => useMemo(() => <div className={`wrapper ${styles.wrapper}`}>{props.children}</div>, [])