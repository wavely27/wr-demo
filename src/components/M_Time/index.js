/*
 * @Author: hongbai
 * @Date: 2020-06-05 14:02:07
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-05 18:26:25
 */
import React from 'react'
import styles from './style.css'
import useTime from '@/hook/useTime'

export default () => {
  const time = useTime()

  return (
    <div className={styles.timeWrap}>
      <p className={styles.time}>{time.Hm}</p>
    </div>
  )
}