/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:37:45
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-05 20:16:56
 */
import React, { useState } from 'react'
import styles from './styles.css'
import TaskGroup from '@/components/TaskGroup'
import TaskCard from '@/components/TaskCard'

const staticTaskData = [
  {
    id: 1,
    groupName: 'todo',
    color: '#e53935',
    list: [
      {
        id: 1,
        taskName: 'eat'
      },
      {
        id: 2,
        taskName: 'go home'
      },
    ]
  },
  {
    id: 2,
    groupName: 'things to buy',
    color: '#3288e6',
    list: []
  },
]

export default () => {
  const [taskData, setTaskData] = useState(staticTaskData)
  return (
    <div className={styles.listBox}>
      {
        taskData.map(group => {
          const { list, id, groupName, color } = group
          if (list && list.length > 0) {
            return <TaskGroup key={id} groupName={groupName} color={color} />
          }
          return <TaskCard key={id} groupName={groupName} color={color} list={list} />
        })
      }
    </div>
  )
}