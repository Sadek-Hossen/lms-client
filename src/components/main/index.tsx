import React from 'react'
import ResponsiveNavbar from '../layout/navbur/navbur'
import Hero from '../heroCompunents/heroSection/hero'
import State from '../heroCompunents/stateBur/state'
import CardCloud from '../heroCompunents/cloudAllCard/cardCloud'

function IndexFile() {
  return (
    <div>
       <ResponsiveNavbar />
       <Hero />
       <State />
       <CardCloud />
    </div>
  )
}

export default IndexFile