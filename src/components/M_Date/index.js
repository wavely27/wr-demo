/*
 * @Author: hongbai
 * @Date: 2020-06-05 14:02:07
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-05 18:34:43
 */
import React from 'react'
import styles from './style.css'
import useTime from '@/hook/useTime'

export default () => {
  const time = useTime()

  return (
    <div className={styles.date}>
      <p className={styles.day}>{time.DD}</p>
      <div>
        <p className={styles.month}>{time.MMM}</p>
        <p className={styles.year}>{time.YYYY}</p>
      </div>
    </div>
  )
}