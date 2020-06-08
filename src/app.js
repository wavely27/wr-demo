/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:05:55
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-08 17:36:27
 */
import React, { Suspense, useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import Swiper from 'swiper'

const Home = React.lazy(() => import('@/app/Home'));

export default () => {
  useEffect(() => {
    window.swiper = new Swiper('.root')
  })
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Route path={'/'} component={Home} />
      </Suspense>
    </Router>
  )
}