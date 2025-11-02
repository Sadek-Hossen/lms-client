import React from 'react'
import ResponsiveNavbar from '../layout/navbur/navbur'
import Hero from '../heroCompunents/heroSection/hero'
import State from '../heroCompunents/stateBur/state'
import CardCloud from '../heroCompunents/cloudAllCard/cardCloud'
import WhatT from '../heroCompunents/whatTOCS/whatT'
import ClassRom from '../heroCompunents/classroomSec/class'
import Footer from '../layout/footer/footer'

function IndexFile() {
  return (
    <div>
       <ResponsiveNavbar />
       <Hero />
       <State />
       <CardCloud />
       <WhatT />
       <ClassRom />
       <Footer />
    </div>
  )
}

export default IndexFile