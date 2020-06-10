/*
 * @Author: hongbai
 * @Date: 2020-06-05 14:43:05
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-10 11:21:12
 */
import { useEffect } from 'react'
import { addEvent, removeEvent } from '@/utils/event'

export default (handle) => {
  const param = [window, 'scroll', handle || console.log]
  useEffect(() => {
    addEvent.apply(null, param)
    return () => { removeEvent.apply(null, param) }
  }, [])
}