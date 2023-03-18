import React, {useRef, useEffect, useState} from 'react'
import {Link, useLocation } from 'react-router-dom'
import './header.css'
import {paths} from '../../assets/static/data'
import {CgMenuGridO} from 'react-icons/cg'
import Logo from '../../assets/images/SVG/Asset 2.svg'
import Laptop from '../../assets/images/laptop-png.png'
import CV from '../../assets/brand/my_resume.pdf'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'


function Header() {
  const BtnToggle = useRef(null)
  const NavList = useRef(null)

  useEffect(() => {
    
    const btn = BtnToggle.current
    btn.addEventListener('click', toggleActive)
  
    return () => btn.removeEventListener('click', toggleActive)
  }, [])
  
  const toggleActive = () => NavList.current.classList.toggle('active')

  useEffect(() => {
    const items = document.querySelectorAll('.nav-list-item')
    items.forEach((item, index) => {
      item.style.setProperty('--i', index)
      item.addEventListener('click', () => {
        items.forEach(i => i.classList.remove('active'))
        item.classList.add('active')
          }) 
        })
    }, [])
  


  return ( 
    <>
     <div className="header">
       <img src={Logo} alt="Dev_Legals Logo" />
       <div className="header-container">
         <div className="links">
           <ul className="nav-list" ref={NavList} >
             <div className="btn-toggle flex center" ref={BtnToggle}><CgMenuGridO/></div>
             {paths.map(path => <Li key={path.name} {...path}/>)}
           </ul>
         </div>
       </div>
     </div>
     <div className="sidebar flex-column">
       <div className="sidebar-container flex flex-column relative">
        <img src={Logo} alt="Dev_Legals Logo" />
         <div className="links">
           <ul className="side-nav-list relative flex flex-column">
             {paths.map(path => <Li key={path.name} {...path}/>)}
           </ul>
         </div>
         <div className="cv-container relative flex center flex-column">
            <a className='cv flex center flex-column' href={CV} download>
              <span> view CV</span> <span className="btn-icon"> <BsFillArrowDownCircleFill/> </span>
            </a>

            <img src={Laptop} alt="Cv 3d" className='cv-image absolute'/>
         </div>
       </div>
     </div>
    </>
  )
}

const Li = ({name, to, icon}) => {
  const location = useLocation();
  const [activePage, setActivePage] = useState('');
  
  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);


  return(
    <li className={` nav-list-item flex center relative ${to === activePage ? 'active_page' : ''}`} >
      <Link to={{ pathname: to, state: { page: name }}} className='link-icon' >{icon}</Link>
     </li>
  )
}

export default Header