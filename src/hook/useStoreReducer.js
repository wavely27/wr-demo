/*
 * @Author: hongbai
 * @Date: 2020-06-08 14:46:46
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-17 18:40:00
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
// create new task
function createTask(store, taskData) {
  const { groupList } = store
  const gl = groupList.map(group => {
    const task = {}
    if (group.id === taskData.groupId) {
      task.id = store.taskLastId + 1
      task.task = taskData.taskName
      task.important = taskData.important
      task.isDone = false
      return { ...group, taskList: [...group.taskList, task] }
    }
    return group
  })
  return { ...store, groupList: gl, taskLastId: store.taskLastId + 1 }
}

function reducer(store, action) {
  let newStore = store
  switch (action.type) {
    case 'UPDATE_STORE':
      newStore = action.payload
      setLocalStorage(newStore)
      return { ...newStore }
    case 'UPDATE_TASK':
      newStore = updateTask(store, action.payload)
      setLocalStorage(newStore)
      return { ...newStore }
    case 'CREATE_TASK':
      newStore = createTask(store, action.payload)
      console.log('newStore ===> ', newStore)
      setLocalStorage(newStore)
      return { ...newStore, successType: action.type }
    case 'RESET_SUCCESS':
      return { ...newStore, successType: undefined }
    default:
      return { ...store }
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, null, init)
  console.log('r state ===> ', state)

  return [state, dispatch]
}