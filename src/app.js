/*
 * @Author: hongbai
 * @Date: 2020-06-04 16:05:55
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-17 18:29:48
 */
import React, { Suspense, useEffect } from 'react';
import { Route, Redirect, Switch, useHistory } from 'react-router-dom'
import useStoreReducer from '@/hook/useStoreReducer'
import useSuccess from '@/hook/useSuccess'

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
  ],
  groupLastId: 2,
  taskLastId: 2,
}

export const StoreContext = React.createContext()

export default () => {
  const [store, dispatch] = useStoreReducer()
  const history = useHistory()
  useSuccess(store, dispatch, history)
  // useEffect(() => {
  //   dispatch({ type: 'UPDATE_STORE', payload: staticStore })
  // }, [])

  return (
    <StoreContext.Provider value={{ store, dispatch, history }}>
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
    </StoreContext.Provider>
  )
}