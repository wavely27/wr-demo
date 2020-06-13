/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:37:45
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 15:21:57
 */
import React, { useMemo } from 'react'
import { RollbackOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import FloatButton from '@/components/FloatButton'

const LinkToHome = () => useMemo(() => (
  <Link to="/home">
    <FloatButton>
      <RollbackOutlined style={{ fontSize: '28px' }} />
    </FloatButton>
  </Link>
), [])

export default LinkToHome