import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const contact = () => {
  return (
    <div>
        <Hero heading='Kontakt' message='Skontaktuj się z nami i skorzystaj z okazji.' />
        <Contact />
    </div>
  )
}

export default contact