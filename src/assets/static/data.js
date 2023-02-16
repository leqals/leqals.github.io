import solarSystem from '../../assets/images/solarSystem.jpg'
// import crypto from '../../assets/images/cryto.jpg'
// import MusicStudio from '../../assets/images/Music-studio.jpg'
import bgImg from '../../assets/images/background-img.jpg'
import Me3 from '../../assets/images/img-me-3.jpg'
import {FaPython, FaConnectdevelop} from 'react-icons/fa'
import {SiSelenium} from 'react-icons/si'

import {SiJavascript, SiDjango, SiWordpress} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'


import {FaFacebook, FaWhatsapp, FaLinkedin, FaGithub} from 'react-icons/fa'
import {SiFiverr, SiUpwork} from 'react-icons/si'

import {FaHandshake, FaPiggyBank, FaClock} from 'react-icons/fa'
import {TiThumbsOk} from 'react-icons/ti'

import {FaHome, FaBurn, FaTelegram} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'


export const paths = [
  { 
    name: "home",
    to: '/',
    icon: <FaHome/> ,
  },
  {
    name: 'portfolios',
    to: '/portfolios',
    icon: <FaBurn/> ,
  },
  {
    name: 'contact',
    to: '/contact',
    icon: <FaTelegram/> ,
  },
  {
    name: 'about',
    to: '/about',
    icon: <FiUser/> ,
  },
]

export const benefits = [
  {
      name: 'Honest',
      subtitle: 'Understand relavance of honesty when you work with Him',
      icon: <FaHandshake/>,
      color: "orange"
  },
  {
      name: 'Reduce Cost',
      subtitle: 'Skip unneccessary cost and go straight to the point',
      icon: <FaPiggyBank/>,
      color: "#a5b2dd"
  },
  {
      name: 'Precise',
      subtitle: 'Achieve more than what you want. Achieve want You need',
      icon: <TiThumbsOk/>,
      color: "#dcdc79"
  },
  {
      name: 'Timeliness',
      subtitle: 'Get your project not a minute after',
      icon: <FaClock/>,
      color: "var(--clr-acc)"
  }
]


export const sociallinks = [
  {   
      name: 'Facebook',
      address: '#',
      icon: <FaFacebook/>
},
  {   
      name: 'Whatsapp',
      address: '#',
      icon: <FaWhatsapp/>
},
  {   
      name: 'LinkedIN',
      address: '#',
      icon: <FaLinkedin/>
},
  {   
      name: 'GitHub',
      address: '#',
      icon: <FaGithub/>
},
  {   
      name: 'Fiverr',
      address: 'https://www.fiverr.com/saateranongu',
      icon: <SiFiverr/>
},
  {   
      name: 'Upwork',
      address: '#',
      icon: <SiUpwork/>
}
]

 export const skillsArr = [
    
    {
      Name: 'JavaScript',
      Level : 87,
      LevelStr: 'Intermidiate',
      icon: <SiJavascript/>,
      color: '#c68e17'
    }, 
    {
      Name: 'React',
      Level : 75,
      LevelStr: 'Intermidiate',
      icon: <FaReact/>,
      color: '#dc56cd'
    },
    {
      Name: 'Python',
      Level : 76,
      LevelStr: 'Intermidiate',
      icon: <FaPython/>,
      color: '#43acfd'
    },
    {
      Name: 'Django',
      Level : 65,
      LevelStr: 'Intermidiate',
      icon: <SiDjango/>,
      color: '#77dd77'
    },
    {
      Name: 'Wordpress',
      Level : 80,
      LevelStr: 'Intermidiate',
      icon: <SiWordpress/>,
      color: '#aaaaff'
    },
  ]

export const testimonials =  [
      
      {
        clientName: 'Femi Lel',
        clientRating: 98,
        comment: 'He is a not a great Developer just because He creates Websites and Applications with Excellent functionality',
        clientImg: Me3
      },
      
      {
        clientName: 'Mr. Tunde',
        clientRating: 98,
        comment: 'He is a not a great Developer just because He creates Websites and Applications with Excellent functionality',
        clientImg: Me3
      },

    ]
 
export const services = [
    {
      id: 1,
      title: 'Web Developer' ,
      subtitle: 'Designs and Develops. ',
      serviceIcon: <FaConnectdevelop/>,
      icolor: '#a0ffaa'
    },
    {
      id:2, 
      title: 'Python Programing' ,
      subtitle: "Scripts and Solve problems.",
      serviceIcon: <FaPython/>,
      icolor: '#ffdda0'
    },
    {
      id: 3,
      title: 'Data Analysis' ,
      subtitle: 'Data Scraping, Analysis  and ML.',
      serviceIcon: <SiSelenium/>,
      icolor: '#ffa0fa'
    },
  ]

 
 
 export const portfolios =[
      {
          id : 1,
          category : "python",
          name : "Planet Simulation",
          description: 'Basic Calculator built with plain Vanilla Javascript',
          libraries : ["python"],
          LiveDemo: false,
          LiveDemoAdrress: "",
          SourceCode: true,
          SourceCodeAddress: "",
          imageUrl : solarSystem
      },
      // {
      //    id : 3,
      //    category : "Web Development",
      //    name : "Music Promotion Platform (MusikBank.com)",
      //    libraries : ["Wordpress"],
      //    LiveDemo: true,
      //    LiveDemoAdrres: "",
      //    SourceCode: true,
      //    SourceCodeAddress: "",
      //    imageUrl: MusicStudio
      // },
      // {
      //     id : 7,
      //     category : "Web Scraping",
      //     name : "On Page Image Collector App using KivyMd With Image Extension Filter",
      //     libraries : ["BeautifulSoup", "Requests", "Selenium", "Kivy", "KivyMD"],
      //     LiveDemo: true,
      //     LiveDemoAdrress: "",
      //     SourceCode: true,
      //     SourceCodeAddress: "",
      //     imageUrl : bgImg
      // },
      {
          id : 8,
          category : "Web Development",
          name : "Portfolio Website ",
          description: 'A Modern, Responsive, portfolio website built with React.JS and Django',
          libraries : ["react"],
          LiveDemo: true,
          LiveDemoAdrress: "",
          SourceCode: false,
          SourceCodeAddress: "",
          imageUrl : bgImg
      },
      {
          id : 9,
          category : "Web Development",
          name : "Vanilla JS Calculator ",
          description: 'Basic Calculator built with plain Vanilla Javascript',
          libraries : ["javascript"],
          LiveDemo: true,
          LiveDemoAdrress: "",
          SourceCode: true,
          SourceCodeAddress: "",
          imageUrl : bgImg
      },

   ]