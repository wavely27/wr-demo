/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:37:45
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-08 17:00:54
 */
import React, { useState } from 'react'
import styles from './styles.css'
import TaskGroup from '@/components/TaskGroup'
import TaskCard from '@/components/TaskCard'

const staticTaskData = {
  groupList: [
    {
      id: 1,
      groupName: 'To Do',
      color: '#e53935',
      taskList: [
        {
          id: 1,
          task: 'Eat',
          isDone: true,
          important: false,
        },
        {
          id: 2,
          task: 'Go home',
          isDone: false,
          important: false,
        },
      ]
    },
    {
      id: 2,
      groupName: 'Things to buy',
      color: '#d81c5f',
      taskList: []
    },
  ]
}

export default () => {
  const [groupList, setTaskData] = useState(staticTaskData.groupList)
  return (
    <div className={styles.listBox}>
      {
        groupList.map(group => {
          const { taskList: list, id, groupName, color } = group
          console.log('list ===> ', list)
          if (list && list.length > 0) {
            return <TaskCard key={id} groupName={groupName} color={color} list={list} />
          }
          return <TaskGroup key={id} groupName={groupName} color={color} />
        })
      }
    </div>
  )
}