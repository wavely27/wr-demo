/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:05:55
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-10 12:06:35
 */
import React from 'react';
import AppWrapper from './AppWrapper'
import AppHeader from './AppHeader'
import AppContext from './AppContext'
import AppInput from './AppInput'

export default () => {
  return (
    <AppWrapper>
      <AppHeader />
      <AppContext />
      <AppInput />
    </AppWrapper>
  )
}