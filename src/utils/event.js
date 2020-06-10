/*
 * @Author: hongbai
 * @Date: 2020-06-10 10:59:25
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-10 11:32:51
 */

export function addEvent(element, type, handler) {
  if (window.addEventListener) {
    console.log('element, type, handler ===> ', element, type, handler)
    element.addEventListener(type, handler, false);
  } else if (window.attachEvent) {
    element.attachEvent("on" + type, handler);
  } else {
    element["on" + type] = handler;
  }
}

export function removeEvent(element, type, handler) {
  if (window.removeEventListener) {
    element.removeEventListener(type, handler, false);
  } else if (window.detachEvent) {
    element.detachEvent("on" + type, handler);
  } else {
    element["on" + type] = null;
  }
}

export default { addEvent, removeEvent }