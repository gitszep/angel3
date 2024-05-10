import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Support from '../components/Support'
import Footer from '../components/Footer'


const kodyrabatowe = () => {
  return (
    <div>
        <Hero heading='Kody rabatowe' message='Kody rabatowe na tańsze zakupy online.' />
        <Support/>
        <Portfolio />
        <Footer/>
    </div>
  )
}

export default kodyrabatowe