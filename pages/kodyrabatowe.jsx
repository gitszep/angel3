import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Support from '../components/Support'

const kodyrabatowe = () => {
  return (
    <div>
        <Hero heading='Kody rabatowe' message='Kody rabatowe na tańsze zakupy online.' />
        <Support/>
        <Portfolio />
    </div>
  )
}

export default kodyrabatowe