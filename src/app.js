/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:05:55
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-05 14:35:05
 */
import React from 'react';
import AppWrapper from './app/AppWrapper'
import AppHeader from './app/AppHeader'
import AppInput from './app/AppInput'
import AppContext from './app/AppContext'

const TodoList = () => {
  return (
    <AppWrapper>
      <AppHeader />
      {/* <AppInput /> */}
      <AppContext />
    </AppWrapper>
  )
}

export default TodoList