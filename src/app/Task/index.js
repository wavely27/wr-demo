/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:05:55
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 13:21:23
 */
import React from 'react';
import AppWrapper from './AppWrapper'
import AppContent from './AppContent'
import AppBack from './AppBack'

export default () => {
  return (
    <AppWrapper>
      <AppContent />
      <AppBack />
    </AppWrapper>
  )
}