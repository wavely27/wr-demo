/*
 * @Author: hongbai
 * @Date: 2020-06-08 14:46:46
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 15:09:11
 */
import { useReducer } from 'react'
import { WR_LIST_DATA } from '@/utils/constant'

function init() {
  return getLocalStorage() || { groupList: [] }
}

function getLocalStorage() {
  return JSON.parse(window.localStorage.getItem(WR_LIST_DATA))
}

function setLocalStorage(data) {
  window.localStorage.setItem(WR_LIST_DATA, JSON.stringify(data))
}

// store part update
function updateTask(store, taskUpdater) {
  const { groupList } = store
  const gl = groupList.map(group => {
    const taskList = group.taskList.map(task => {
      if (task.id === taskUpdater.id) {
        return { ...task, ...taskUpdater }
      }
      return task
    })

    return { ...group, taskList }
  })
  return { groupList: gl }
}

function reducer(store, action) {
  let newStore
  switch (action.type) {
    case 'UPDATE_STORE':
      newStore = action.payload
      setLocalStorage(newStore)
      return { ...newStore }
    case 'UPDATE_TASK':
      newStore = updateTask(store, action.payload)
      setLocalStorage(newStore)
      return { ...newStore }
    default:
      return { ...store }
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, null, init)
  return [state, dispatch]
}