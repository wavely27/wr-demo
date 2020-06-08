/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:05:55
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-08 16:44:46
 */
import React from 'react';
import AppWrapper from './AppWrapper'
import AppHeader from './AppHeader'
import AppContext from './AppContext'

export default () => {
  return (
    <AppWrapper>
      <AppHeader />
      <AppContext />
    </AppWrapper>
  )
}