import React from 'react'
import ResponsiveNavbar from '../layout/navbur/navbur'
import Hero from '../heroCompunents/heroSection/hero'
import State from '../heroCompunents/stateBur/state'
import CardCloud from '../heroCompunents/cloudAllCard/cardCloud'
import WhatT from '../heroCompunents/whatTOCS/whatT'

function IndexFile() {
  return (
    <div>
       <ResponsiveNavbar />
       <Hero />
       <State />
       <CardCloud />
       <WhatT />
    </div>
  )
}

export default IndexFile