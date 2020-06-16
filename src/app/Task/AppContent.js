/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:37:45
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-15 10:06:17
 */
import React, { useMemo, useContext, useState, useEffect } from 'react'
import styles from './styles.css'
import CardWrap from '@/components/CardWrap'
import SaveButton from './SaveButton'
import { StoreContext } from '@/app'

const AppContent = () => {
  const [groupId, setGroupId] = useState(undefined)
  const [taskState, setTaskState] = useState({
    groupId: undefined,
    groupName: 'error',
    color: '#ffffff',
    isImportant: false,
    taskName: '',
  })
  const { color, groupName, isImportant } = taskState
  const ctx = useContext(StoreContext)
  const { groupList } = ctx.store
  useEffect(() => {
    if (taskState.groupId) {
      groupList.forEach(group => {
        if (group.id === taskState.groupId) {
          setTaskState((taskState) => {
            const { id, color, groupName } = group
            return { ...taskState, color, groupName, groupId: id }
          })
          setGroupId(group.id)
        }
      })
    } else {
      setTaskState((taskState) => {
        const { id, color, groupName } = groupList && groupList[0]
        return { ...taskState, color, groupName, groupId: id }
      })
      setGroupId(groupList[0].id)
    }
  }, [groupId])

  const handleClick = () => {
    setTaskState(taskState => {
      return { ...taskState, isImportant: !taskState.isImportant }
    })
  }

  return useMemo(() => {
    return (
      <div className={styles.listBox} style={{ color: '#ffffff' }}>
        <CardWrap groupName={groupName} color={color}>
          <input className={styles.input} placeholder='I want to ...' />
          <p className={styles.bottomLine} style={{ backgroundColor: color }} />
          <div className={styles.groupBox}>
            {groupList.map(group => {
              if (group.id === groupId) {
                return <span className={styles.groupBtn} key={group.id} style={{ color: '#ffffff', backgroundColor: color, borderColor: color }} >{group.groupName}</span>
              }
              return <span className={styles.groupBtn} key={group.id}>{group.groupName}</span>
            })}
          </div>
          <div className={styles.settingBox}>
            <span onClick={handleClick} className={styles.sign} style={{ backgroundColor: (isImportant ? color : '#ffffff') }}><span className={`${isImportant && styles.signDone}`} /></span>
            &nbsp;&nbsp;&nbsp;Mark as important
          </div>
        </CardWrap>
        <SaveButton dataState={taskState} groupId={groupId} />
      </div>
    )
  }, [taskState, groupId])
}

export default AppContent