/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:05:55
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 15:19:53
 */
import React, { useMemo } from 'react';
import AppWrapper from './AppWrapper'
import AppHeader from './AppHeader'
import AppContent from './AppContent'
import LinkToTask from './LinkToTask'

export default () => useMemo(() => (
  <AppWrapper>
    <AppHeader />
    <AppContent />
    <LinkToTask />
  </AppWrapper>
), [])