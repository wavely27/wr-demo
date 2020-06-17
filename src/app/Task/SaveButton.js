/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:37:45
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-17 18:36:06
 */
import React, { useMemo, useContext } from 'react'
import { StoreContext } from '@/app'
import { CheckOutlined } from '@ant-design/icons'
import FloatButton from '@/components/FloatButton'
import Message from '@/components/Message'

const SaveButton = ({ dataState }) => {
  const ctx = useContext(StoreContext)
  const { dispatch } = ctx
  const saveTask = () => {
    console.log('dataState ===> ', dataState)
    const { taskName } = dataState
    if (!taskName) {
      Message.info('taskName is required', 3000)
    }
    dispatch({ type: 'CREATE_TASK', payload: dataState })
    
  }
  return useMemo(() => (
    <FloatButton style={{ bottom: '20%' }} onClick={saveTask}>
      <CheckOutlined style={{ fontSize: '28px' }} />
    </FloatButton>
  ), [dataState])
}

export default SaveButton