/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:37:45
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-10 12:14:14
 */
import React from 'react'
import { Link } from 'react-router-dom'
import FloatButton from '@/components/FloatButton'

export default () => {
  return (
    <Link to="/task">
      <FloatButton>+</FloatButton>
    </Link>
  )
}