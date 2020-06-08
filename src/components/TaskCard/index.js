/*
 * @Author: hongbai
 * @Date: 2020-06-05 14:02:07
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-08 17:01:27
 */
import React from 'react'
import Task from '@/components/Task'
import CardWrap from '@/components/CardWrap'

export default (props) => {
  const { color, groupName, list } = props
  return (
    <CardWrap color={color} groupName={groupName}>
      {list.map(item => <Task key={item.id} {...item} color={color} />)}
    </CardWrap>
  )
}