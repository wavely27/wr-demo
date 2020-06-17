/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:37:45
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-17 18:39:18
 */
import React, { useMemo, useContext, useState, useEffect } from 'react'
import styles from './styles.css'
import CardWrap from '@/components/CardWrap'
import SaveButton from './SaveButton'
import { StoreContext } from '@/app'

const AppContent = () => {
  const [taskState, setTaskState] = useState({
    groupId: undefined,
    groupName: 'error',
    color: '#ffffff',
    important: false,
    taskName: '',
  })
  const { color, groupName, important } = taskState
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
        }
      })
    } else {
      setTaskState((taskState) => {
        const { id, color, groupName } = groupList && groupList[0]
        return { ...taskState, color, groupName, groupId: id }
      })
    }
  }, [taskState.groupId])

  const handleClick = () => {
    setTaskState(taskState => {
      return { ...taskState, important: !taskState.important }
    })
  }

  const changeGroup = (groupId) => {
    groupList.forEach(group => {
      if (group.id === groupId) {
        setTaskState((taskState) => {
          const { id, color, groupName } = group
          return { ...taskState, color, groupName, groupId: id }
        })
      }
    })
  }

  const taskNameChange = (e) => {
    const value = e.target.value
    setTaskState((taskState) => {
      return { ...taskState, taskName: value }
    })
  }

  return useMemo(() => {
    return (
      <div className={styles.listBox} style={{ color: '#ffffff' }}>
        <CardWrap groupName={groupName} color={color}>
          <input onChange={taskNameChange} className={styles.input} placeholder='I want to ...' />
          <p className={styles.bottomLine} style={{ backgroundColor: color }} />
          <div className={styles.groupBox}>
            {groupList.map(group => {
              if (group.id === taskState.groupId) {
                return <span className={styles.groupBtn} key={group.id} style={{ color: '#ffffff', backgroundColor: color, borderColor: color }} >{group.groupName}</span>
              }
              return <span className={styles.groupBtn} key={group.id} onClick={() => changeGroup(group.id)}>{group.groupName}</span>
            })}
          </div>
          <div className={styles.settingBox}>
            <span onClick={handleClick} className={styles.sign} style={{ backgroundColor: (important ? color : '#ffffff') }}><span className={`${important && styles.signDone}`} /></span>
            &nbsp;&nbsp;&nbsp;Mark as important
          </div>
        </CardWrap>
        <SaveButton dataState={taskState} />
      </div>
    )
  }, [taskState])
}

export default AppContent