import React, { useReducer, useEffect} from 'react'
import {FaPython} from 'react-icons/fa'
import {SiGoogleearth, SiSelenium} from 'react-icons/si'






export function UseSetupPortfolio(category, setIcon, setColor) {

  const reducer = (category) => {
    switch (category) {
      case 'Web Scraping':
        setIcon((ic) => ic = <SiSelenium/>)
        setColor((c) => c = '#dcabff')
       break
      case 'python':
        setIcon((ic) => <FaPython/>)
        setColor((c) => c = '#acedfa')
        break
      case 'Web Development':
        setIcon((ic) => <SiGoogleearth/>)
        setColor((c) => c = '#fcdcaa')
        break
      default :
        return null

    }
}

  // eslint-disable-next-line no-unused-vars
  const [_cat, dispatch] = useReducer(reducer, category)


  useEffect(() => {
    dispatch()
  }, [])
}