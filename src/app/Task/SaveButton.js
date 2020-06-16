/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:37:45
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-15 11:01:12
 */
import React, { useMemo, useContext } from 'react'
import { StoreContext } from '@/app'
import { CheckOutlined } from '@ant-design/icons'
import FloatButton from '@/components/FloatButton'
import Message from '@/components/Message'

const SaveButton = (props) => {
  const ctx = useContext(StoreContext)
  const { dispatch } = ctx
  const saveTask = () => {
    console.log('props.dataState ===> ', props.dataState)
    console.log('props.groupId ===> ', props.groupId)
    console.log('123 ===> ', 123)
    const { color, groupId, groupName, isImportant, taskName } = props.dataState
    if (!taskName) {
      console.log('9 ===> ', 9)
      Message.info('taskName is required', 3000)
    }
  }
  return useMemo(() => (
    <FloatButton style={{ bottom: '20%' }} onClick={saveTask}>
      <CheckOutlined style={{ fontSize: '28px' }} />
    </FloatButton>
  ), [props.groupId, props.dataState])
}

export default SaveButton