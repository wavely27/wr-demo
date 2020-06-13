/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:05:55
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 12:03:24
 */
import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import useStoreReducer from '@/hook/useStoreReducer'

const Home = React.lazy(() => import('@/app/Home'));
const Test = React.lazy(() => import('@/app/Test'));
const Task = React.lazy(() => import('@/app/Task'));

const staticStore = {
  groupList: [
    {
      id: 1,
      groupName: 'To Do',
      color: '#e53935',
      taskList: [
        {
          id: 1,
          task: 'Eat',
          isDone: true,
          important: false,
        },
        {
          id: 2,
          task: 'Go home',
          isDone: false,
          important: false,
        },
      ]
    },
    {
      id: 2,
      groupName: 'Things to buy',
      color: '#d81c5f',
      taskList: []
    },
  ]
}

export const StoreContext = React.createContext()

export default () => {
  const [store, dispatch] = useStoreReducer()
  // useEffect(() => {
  //   dispatch({ type: 'updateStore', payload: staticStore })
  // }, [])

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Redirect from={'/'} exact to='/home' />
            <Route path={'/home'} exact component={Home} />
            <Route path={'/test'} exact component={Test} />
            <Route path={'/task'} exact component={Task} />
            <Route path={'/groups'} exact component={Home} />
            <Route path={'/group'} exact component={Home} />
            <Route path={'/'} render={() => <div>no page</div>} />
          </Switch>
        </Suspense>
      </Router>
    </StoreContext.Provider>
  )
}