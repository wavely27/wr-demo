/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:37:45
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 17:09:49
 */
import React, { useMemo, useContext, useState, useEffect } from 'react'
import styles from './styles.css'
import CardWrap from '@/components/CardWrap'
import { StoreContext } from '@/app'
import CheckBox from '@/components/CheckBox'

const AppContent = () => {
  const [taskState, setTaskState] = useState({
    groupId: undefined,
    groupName: 'error',
    color: '#ffffff',
    isImportant: true,
    taskName: '',
  })
  const ctx = useContext(StoreContext)
  const { groupList } = ctx.store
  useEffect(() => {
    console.log('effect ===> ', )
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

  const { groupId, color, groupName, isImportant } = taskState
  return useMemo(() => (
    <div className={styles.listBox} style={{ color: '#ffffff' }}>
      <CardWrap groupName={groupName} color={color}>
        <input className={styles.input} placeholder='I want to ...' />
        <p className={styles.bottomLine} style={{ backgroundColor: color }} />
        <div className={styles.groupBox}>
          {groupList.map(group => {
            if (group.id === groupId) {
              console.log('color ===> ', color)
              return <span className={styles.groupBtn} key={group.id} style={{ color: '#ffffff', backgroundColor: color, borderColor: color }} >{group.groupName}</span>
            }
            return <span className={styles.groupBtn} key={group.id}>{group.groupName}</span>
          })}
        </div>
        <div className={styles.settingBox}>
        <span onClick={() => {}} className={styles.sign} style={{ backgroundColor: (isImportant ? color : '#ffffff') }}><span className={`${isImportant && styles.signDone}`} /></span>
          &nbsp;&nbsp;&nbsp;Mark as important
        </div>
      </CardWrap>
    </div>
  ), [taskState])
}

export default AppContent