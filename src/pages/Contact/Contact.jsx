import {useEffect, useRef} from 'react'
import { SetPage } from '../../functions'
import './contact.css'
import MetaTags from 'react-meta-tags'
import devProduction from '../../assets/images/devProduction.svg'
import {Layout} from '../../components'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {SiFiverr, SiUpwork} from 'react-icons/si'

function Contact() {
    const send_mail_ref = useRef(null)
    const social_accts_ref = useRef(null)
    
    useEffect(() => {
      send_mail_ref && send_mail_ref.current.style.setProperty(
        '--clr', `#31318C`
      )

      social_accts_ref && social_accts_ref.current.style.setProperty(
        '--clr', `#995708`
      )
    }, [])
  return (
    <Layout>
      
        <MetaTags>
          <title>Portfolios | See the awesome projects by Dev.Legals</title>
          <meta name="description" content="View and Work with the source code of the best websites and python projects on my portfolio. This projects with inspire and at the sametime get you started in the world of software."/>
          <meta property="og:title" content="View and Work with the source code of the best websites and python projects on my portfolio. This projects with inspire and at the sametime get you started in the world of software." />
          <meta property="og:image" content={devProduction} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </MetaTags>
        <div className="contact-wrapper flex relative">
          <div className="contact-container relative flex">
              <div className="contact_form flex flex-column">
                <div className="head" ref={send_mail_ref}>
                  <span className="decor"></span>
                  <h4 className="side_title relative" >Send Mail</h4>
                </div>
                <form action="" method='POST' className='full_form relative flex flex-column'>
                    <div className="input-container">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" placeholder='DevLegals@gmail.com' required/>
                    </div>
                    <div className="input-container">
                      <label htmlFor="title">Title</label>
                      <input type="text" id="title" placeholder='something like "Job offer"' required/>
                    </div>
                    <div className="input-container">
                      <label htmlFor="message">Message</label>
                      <textarea type="text" id="message" required>Try "Hey I have a job for you</textarea>
                    </div>
                    <div className="capsule_buttons">
                      <input type="submit" className="capsule_btn capsule_btn_left" value='Send' />
                      <input type="reset" className="capsule_btn capsule_btn_right" value='Clear' />
                    </div>
                </form>
              </div>

              <div className="right_container">
                <div className="head" ref={social_accts_ref}>
                  <span className="decor"></span>
                  <h4 className="side_title" >Social Accounts </h4>
                </div>
                
                <div className="socials_container">
                  <a href="#nothing" className="social" target="_blank">
                    <div className="social_icon"><SiUpwork/></div>
                    <h4 className="social_handle">UpWork</h4>
                  </a>
                  <a href="#nothing" className="social" target="_blank">
                    <div className="social_icon"><FaLinkedin/></div>
                    <h4 className="social_handle">LinkedIn</h4>
                  </a>
                  <a href="#nothing" className="social" target="_blank">
                    <div className="social_icon"><FaGithub/></div>
                    <h4 className="social_handle">Github</h4>
                  </a>
                  <a href="#nothing" className="social" target="_blank">
                    <div className="social_icon"><SiFiverr/></div>
                    <h4 className="social_handle">Fiverr</h4>
                  </a>
                </div>
              </div>
          </div>
        </div>
    </Layout>

  )
}

export default Contact