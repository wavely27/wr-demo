/*
 * @Author: hongbai
 * @Date: 2020-06-05 13:59:24
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 15:20:10
 */
import React, { useMemo } from 'react'
import { UnorderedListOutlined, SettingOutlined, AppstoreOutlined, FormOutlined } from '@ant-design/icons'
import styles from './styles.css'
import M_Date from '@/components/M_Date'
import M_Time from '@/components/M_Time'
import TopTip from '@/components/TopTip'

const AppHeader = () => useMemo(() => (
  <div className={styles.header}>
    <div className={styles.tips}>
      <TopTip>
        <UnorderedListOutlined />
      </TopTip>
      <TopTip>
        <SettingOutlined />
      </TopTip>
      <TopTip>
        <AppstoreOutlined />
      </TopTip>
      <TopTip>
        <FormOutlined />
      </TopTip>
    </div>
    <M_Date />
    <M_Time />
  </div>
), [])
export default AppHeader