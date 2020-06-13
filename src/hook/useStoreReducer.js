/*
 * @Author: hongbai
 * @Date: 2020-06-08 14:46:46
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 11:47:15
 */
import { useReducer } from 'react'
import { WR_LIST_DATA } from '@/utils/constant'

function init(initialState) {
  return initialState || getLocalStorage() || { groupList: [] }
}

function getLocalStorage() {
  return JSON.parse(window.localStorage.getItem(WR_LIST_DATA))
}

function setLocalStorage(data) {
  window.localStorage.setItem(WR_LIST_DATA, JSON.stringify(data))
}

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

window.count = 0

function reducer(store, action) {
  console.log('1 ++ ===> ', window.count++)
  let newStore
  switch (action.type) {
    case 'updateStore':
      newStore = action.payload
      setLocalStorage(newStore)
      return { ...newStore }
    case 'UPDATE_TASK':
      console.log(' ===> ', )
      newStore = updateTask(store, action.payload)
      setLocalStorage(newStore)
      return { ...newStore }
    default:
      return { ...store }
  }
}

export default (initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState, init)
  return [state, dispatch]
}