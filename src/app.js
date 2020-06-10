/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:05:55
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-10 12:09:54
 */
import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

const Home = React.lazy(() => import('@/app/Home'));
const Task = React.lazy(() => import('@/app/Task'));

export default () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Redirect from={'/'} exact to='/home' />
          <Route path={'/home'} exact component={Home} />
          <Route path={'/task'} exact component={Task} />
          <Route path={'/groups'} exact component={Home} />
          <Route path={'/group'} exact component={Home} />
          <Route path={'/'} render={() => <div>no page</div>} />
        </Switch>
      </Suspense>
    </Router>
  )
}