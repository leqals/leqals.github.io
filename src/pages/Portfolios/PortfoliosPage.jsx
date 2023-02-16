import React from 'react'
import './portfolio.css'
import MetaTags from 'react-meta-tags'
import devProduction from '../../assets/images/devProduction.svg'
import {Layout} from '../../components'
import {portfolios} from '../../assets/static/data'
import PortfolioContainer from './PortfolioContainer'

function PortfoliosPage() {

  return (  
    <Layout>
      
      <MetaTags>
          <title>Portfolios | See the awesome projects by Dev.Legals</title>
          <meta name="description" content="View and Work with the source code of the best websites and python projects on my portfolio. This projects with inspire and at the sametime get you started in the world of software."/>
          <meta property="og:title" content="View and Work with the source code of the best websites and python projects on my portfolio. This projects with inspire and at the sametime get you started in the world of software." />
          <meta property="og:image" content={devProduction} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </MetaTags>

        <div className="portfolio_page">
          <h3 className="page_name">My Projects</h3>
          <div className="portfolio_page_container">
            {
              portfolios.map(port => <PortfolioContainer key={port.id} {...port}/>)
              }
          </div>
        </div>
    
    </Layout>

  )
}



export default PortfoliosPage