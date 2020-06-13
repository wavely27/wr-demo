/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:05:55
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 18:26:21
 */
import React, { useMemo } from 'react';
import AppWrapper from './AppWrapper'
import AppContent from './AppContent'
import SaveButton from './SaveButton'
import LinkToHome from './LinkToHome'

export default () => useMemo(() => (
  <AppWrapper>
    <AppContent />
    <SaveButton />
    <LinkToHome />
  </AppWrapper>
), [])