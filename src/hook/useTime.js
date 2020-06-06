/*
 * @Author: hongbai
 * @Date: 2020-06-05 14:43:05
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-05 17:25:36
 */
import { useState, useEffect, useRef } from 'react'
import moment from 'moment'

const getTimeObject = () => {
  const now = moment(new Date())
  const obj = {
    time: now,
    YMD: now.format('YYYY-MM-DD'),
    Hms: now.format('HH:mm:ss'),
    Hm: now.format('HH:mm'),
    YYYY: now.format('YYYY'),
    MMM: now.format('MMM'),
    DD: now.format('DD'),
  }
  return obj
}

const useTime = () => {
  const timeRef = useRef(null)
  const [time, setTime] = useState(() => getTimeObject())

  useEffect(() => {
    if (timeRef && timeRef.current === null) {
      timeRef.current = setInterval(function () {
        setTime(getTimeObject())
      }, 1000)
    }
    return () => {
      clearInterval(timeRef.current)
      timeRef.current = null
    }
  }, [])

  return time
}

export default useTime