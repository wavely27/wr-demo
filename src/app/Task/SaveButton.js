/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:37:45
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 18:29:26
 */
import React, { useMemo, useContext } from 'react'
import { StoreContext } from '@/app'
import { CheckOutlined } from '@ant-design/icons'
import FloatButton from '@/components/FloatButton'

const SaveButton = () => {
  const ctx = useContext(StoreContext)
  const { dispatch } = ctx
  const saveTask = () => {
    console.log('123 ===> ', 123)
  }
  return useMemo(() => (
    <FloatButton style={{ bottom: '20%' }} onClick={saveTask}>
      <CheckOutlined style={{ fontSize: '28px' }} />
    </FloatButton>
  ), [])
}

export default SaveButton