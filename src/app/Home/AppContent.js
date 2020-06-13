/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:37:45
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 15:25:10
 */
import React, { useContext, useMemo } from 'react'
import { StoreContext } from '@/app'
import TaskGroup from '@/components/TaskGroup'
import TaskCard from '@/components/TaskCard'
import styles from './styles.css'

const AppContent = () => {
  const ctx = useContext(StoreContext)
  const { groupList } = ctx.store
  return useMemo(() => (
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
  ), [groupList])
}

export default AppContent