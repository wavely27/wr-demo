/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:05:55
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-10 10:25:54
 */
import React, { Suspense, useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import dog from '@/asset/audio/dog.mp3'

const Home = React.lazy(() => import('@/app/Home'));

export default () => {
  useEffect(() => {

  })

  return (
    <div>
      <audio className='dog' src={dog} controls="controls" />
    </div>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Route path={'/'} component={Home} />
      </Suspense>
    </Router>
  )
}