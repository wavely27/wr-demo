/*
 * @Author: hongbai
 * @Date: 2020-06-05 13:59:24
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-13 13:36:29
 */
import React, { useMemo } from 'react'
import { UnorderedListOutlined, SettingOutlined, AppstoreOutlined, FormOutlined } from '@ant-design/icons'
import styles from './styles.css'
import M_Date from '@/components/M_Date'
import M_Time from '@/components/M_Time'
import TopTip from '@/components/TopTip'

export default class AppHeader extends React.Component {
  render() {
    console.log('AppHeader render ===> ')
    return (
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
    )
  }
}
// export default () => {
//   console.log(' header return ===> ')
//   const render = useMemo(() => {
//     console.log('header mome ===> ')
//     return (
//       <div className={styles.header}>
//         <div className={styles.tips}>
//           <TopTip>
//             <UnorderedListOutlined />
//           </TopTip>
//           <TopTip>
//             <SettingOutlined />
//           </TopTip>
//           <TopTip>
//             <AppstoreOutlined />
//           </TopTip>
//           <TopTip>
//             <FormOutlined />
//           </TopTip>
//         </div>
//         <M_Date />
//         <M_Time />
//       </div>
//     )
//   }, [])
//   return render
// }