/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:05:55
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 13:21:03
 */
import React from 'react';
import AppWrapper from './AppWrapper'
import AppHeader from './AppHeader'
import AppContent from './AppContent'
import AppInput from './AppInput'

export default () => {
  return (
    <AppWrapper>
      <AppHeader />
      <AppContent />
      <AppInput />
    </AppWrapper>
  )
}