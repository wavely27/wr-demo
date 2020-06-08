/*
 * @Author: hongbai
 * @Date: 2020-06-08 14:46:46
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-08 15:35:36
 */
import { useReducer } from 'react'
import useStoreReducer from './useStroeReducer'

function reducer(state, action) {
  switch (action.type) {
    case 'updateGroup':
      return { ...state }
  }
}

export default ({ groupId }) => {
  const [store, dispatch] = useStoreReducer()
  const { groupList } = store
  function init(groupId) {
    const group = groupList.filter(group => group.id === groupId)
    console.log('group ===> ', group)
    return initialState || { group: {} }
  }
  const [state, dispatch] = useReducer(reducer, groupId, init)
  return [state, dispatch]
}