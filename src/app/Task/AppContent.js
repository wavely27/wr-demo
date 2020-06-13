/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:37:45
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-12 14:34:41
 */
import React from 'react'
import styles from './styles.css'
import CardWrap from '@/components/CardWrap'

export default () => {
  return (
    <div className={styles.listBox} style={{ color: '#ffffff' }}>
      <CardWrap groupName={'groupName'} color={'#33ee33'}>
        <input className={styles.input} placeholder='I want to ...' />
        <p className={styles.bottomLine} />
        groups
      </CardWrap>
    </div>
  )
}