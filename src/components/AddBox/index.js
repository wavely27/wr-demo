/*
 * @Author: hongbai
 * @Date: 2020-06-05 14:02:07
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-08 11:51:57
 */
import React from 'react'
import CardWrap from '@/components/CardWrap'
import styles from './style.css'

export default (props) => {
  const { color, groupName } = props
  return (
    <div className={styles.mask}>
      <CardWrap color={color} groupName={groupName}>
        +++
      </CardWrap>
    </div>
  )
}