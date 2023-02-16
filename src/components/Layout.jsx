import React from 'react'
import {Header, SocialLinks} from '../components'
// import Logo from '../assets/images/myLogo.svg'

function Layout({children}) {
  return (
    <>
        <Header/>
          {/* <img src={Logo} alt="" stp/> */}
          <SocialLinks/>
          {children}
    </>
  )
}

export default Layout