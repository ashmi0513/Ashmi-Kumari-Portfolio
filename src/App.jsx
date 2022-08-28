import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Protfolio from './components/protfolio/protfolio'
import Contact from './components/contacts/contact'
import Footer from './components/footer/footer'


const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Protfolio />
      <Contact />
      <Footer />

    </div>
  )
}

export default App