/*
 * @Author: hongbai
 * @Date: 2020-06-13 16:01:59
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 17:09:12
 */
import React, { useMemo } from 'react'
import styles from './style.css'

const CheckBox = ({ checked = true, handleClick, color = '#ffffff' }) => {
  return useMemo(() => (
    <span onClick={handleClick} className={styles.sign} style={{ backgroundColor: (checked ? color : '#ffffff') }}><span className={`${checked && styles.signDone}`} /></span>
  ), [checked, color])
}

export default CheckBox