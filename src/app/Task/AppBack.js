/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:37:45
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-10 12:15:11
 */
import React from 'react'
import { RollbackOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import FloatButton from '@/components/FloatButton'

export default () => {
  return (
    <Link to="/home">
      <FloatButton>
        <RollbackOutlined style={{ fontSize: '28px' }} />
      </FloatButton>
    </Link>
  )
}