/*
 * @Author: hongbai
 * @Date: 2020-06-13 11:16:41
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 11:29:01
 */
import * as React from "react";
import useTest from '@/hook/useTest'

export const Test = () => {
  const [state, dispatch] = useTest();
  
  return (
    <>
      <div>Value: {state.count}</div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Up</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Down</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
};

export default function App() {
  return (
    <React.StrictMode>
      <Test />
    </React.StrictMode>
  );
}
