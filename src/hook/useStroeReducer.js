/*
 * @Author: hongbai
 * @Date: 2020-06-08 14:46:46
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-08 15:00:31
 */
import { useReducer } from 'react'
function init(initialState) {
  return initialState || { list: [] }
}

function reducer(state, action) {
  switch (action.type) {
    case 'updateStore':
      return { ...state }
  }
}

export default ({ initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init)
  return [state, dispatch]
}