/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:05:55
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 15:21:32
 */
import React, { useMemo } from 'react';
import AppWrapper from './AppWrapper'
import AppContent from './AppContent'
import LinkToHome from './LinkToHome'

export default () => useMemo(() => (
  <AppWrapper>
    <AppContent />
    <LinkToHome />
  </AppWrapper>
), [])