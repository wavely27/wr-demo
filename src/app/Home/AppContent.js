/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:37:45
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 13:55:51
 */
import React, { useContext } from 'react'
import { StoreContext } from '@/app.js'
import styles from './styles.css'
import TaskGroup from '@/components/TaskGroup'
import TaskCard from '@/components/TaskCard'


export default () => {
  const ctx = useContext(StoreContext)
  const { groupList } = ctx.store
  return (
    <div className={styles.listBox}>
      {
        groupList.map(group => {
          const { taskList, id, groupName, color } = group
          if (taskList && taskList.length > 0) {
            return <TaskCard key={id} groupName={groupName} color={color} taskList={taskList} />
          }
          return <TaskGroup key={id} groupName={groupName} color={color} />
        })
      }
    </div>
  )
}