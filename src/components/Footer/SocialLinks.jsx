import React, {useEffect, useRef} from 'react'
import {sociallinks} from '../../assets/static/data'
import {FaPlus} from 'react-icons/fa'

function SocialLinks() {
  useEffect(()=>{

    const toggleButton = document.querySelector('.toggleBtn')

    toggleButton.addEventListener('click', ()=>{
      document.querySelector('.top-socials').classList.toggle('active')
    })

    return () => toggleButton.removeEventListener('click', ()=>{
      document.querySelector('.top-socials').classList.toggle('active')
    })
  }, [])

  return (
    <div className="top-socials">
      
      <div className="top-socials-container">
        {
          sociallinks.map(({name, address, icon}, index) => <SocialLink key = {index}
          name = {name}
          address = {address}
          icon = {icon}
          index = {index}
          />)
        }
      </div>
      <div className="toggleBtn flex"><span><FaPlus/></span></div>
    </div>
  )
}


export const SocialLink = ({name, address, icon, index}) => {
  const sRef = useRef(null)
  useEffect(() => {
    sRef.current.style.setProperty('--i', index)
  }, [index])
  

  return (
    <div className="link" ref={sRef}>
        <a href={address} target='_blank' rel='noreferrer'>
          <span className='link-icon'>{icon}</span> 
          <span className="link-name">{name}</span>
        </a>
    </div>
  )
}
export default SocialLinks




