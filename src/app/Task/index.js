/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:05:55
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-10 12:13:17
 */
import React from 'react';
import AppWrapper from './AppWrapper'
import AppContext from './AppContext'
import AppBack from './AppBack'

export default () => {
  return (
    <AppWrapper>
      <AppContext />
      <AppBack />
    </AppWrapper>
  )
}