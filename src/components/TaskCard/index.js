/*
 * @Author: hongbai
 * @Date: 2020-06-05 14:02:07
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 13:55:27
 */
import React, { useMemo } from 'react'
import Task from '@/components/Task'
import CardWrap from '@/components/CardWrap'

export default (props) => {
  const { color, groupName, taskList } = props
  return useMemo(() => (
    <CardWrap color={color} groupName={groupName}>
      {taskList.map(item => <Task key={item.id} {...item} color={color} />)}
    </CardWrap>
  ))
}