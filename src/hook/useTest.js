/*
 * @Author: hongbai
 * @Date: 2020-06-13 11:26:30
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 11:27:48
 */
import * as React from "react";

window.count = 0

const counterReducer = (state, action) => {
  console.log('1 ===> ', window.count++)
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      state.count = state.count - 1;
      return { ...state };
    case "RESET":
      return { count: 0 };
    default:
      break;
  }
}

export default function () {
  const [state, dispatch] = React.useReducer(counterReducer, { count: 0 });
  return [state, dispatch]
}