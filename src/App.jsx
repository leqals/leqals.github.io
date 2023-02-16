import {React} from 'react'
import {Hero, Services, Skills, Portfolios, Testimonials, Layout} from './components'

function App() {
  
  return (
    <div>
        <Layout>
          <Hero/>
          <Services/>
          <Skills/>
          <Portfolios/>
          <Testimonials/>
        </Layout>
    </div>
  )
}

export default App