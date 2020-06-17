/*
 * @Author: hongbai
 * @Date: 2020-06-17 17:54:10
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-17 18:41:29
 */
import { useEffect } from 'react'
import Message from '@/components/Message'

export default (store, dispatch, history) => {
  console.log('success store ===> ', store)
  useEffect(() => {
    dispatch({ type: 'RESET_SUCCESS' })
    if (store.successType === 'CREATE_TASK') {
      Message.info('create success.')
      setTimeout(() => {
        history.push('/home')
      }, 1000)
    } else if (store.successType === 'UPDATE_TASK') {
      Message.info('update success.')
    }
  }, [store.successType])
  return store
}