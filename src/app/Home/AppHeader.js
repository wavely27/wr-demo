/*
 * @Author: hongbai
 * @Date: 2020-06-05 13:59:24
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-05 14:35:47
 */
import React from 'react'
import styles from './styles.css'
import M_Date from '@/components/M_Date'
import M_Time from '@/components/M_Time'

export default () => {
  return (
    <div className={styles.header}>
      <M_Date />
      <M_Time />
    </div>
  )
}