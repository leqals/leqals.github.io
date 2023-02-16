import React from 'react'
import './footer.css'
import { SocialLink } from './SocialLinks'
import { sociallinks } from '../../assets/static/data'

function Footer() {

    return(
    <footer className='flex flex-column center'>
       <div className="footer-container">
           <About/>
           <div className="address">
               <h5>Locate Me</h5>
               <p>Ondo state, Nigeria</p>
           </div>

           <div className="socials">
                <h4 className="about-title">On socials</h4>
               <div className="social-links">
                {sociallinks.map(({name, address, icon}, index) => <SocialLink 
                key = {index}
                name = {name}
                address = {address}
                icon = {icon}
                />)}
               </div>
           </div>

       </div>

       <div className="copyright">
           Copyright &#169; <span className="focus">Dev.Legals 2022</span>
       </div>
    </footer>
  )
}

const About = () => {
    <div className="f-about">
    <h4 className="about-title">About Me</h4>
    <p>     
        Anongu Silas Saater popularly known as Dev.Legals is a young Web Developer and Pythonister who breeds nothing but Pure love for the world of software. He is HardWorking, Reliable, Relentless and is always ready to Learn more. Work with Him and You will testify to these descriptions. 
    </p>
</div>
}

export default Footer