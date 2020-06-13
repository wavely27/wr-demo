/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:37:45
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 15:20:48
 */
import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import FloatButton from '@/components/FloatButton'

const LinkToTask = () => useMemo(() => (
  <Link to="/task">
    <FloatButton>+</FloatButton>
  </Link>
), [])

export default LinkToTask