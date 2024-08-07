import React from 'react'
// import s from './index.module.less'
import s from './index.module.scss'
// import './index.less'

const Layout = ({ children }) => {
  return (
    // <div className={s.layout}>{children}</div>
    <div className={s.layout}>{children}</div>
  )
}

export default Layout