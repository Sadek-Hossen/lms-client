import React from 'react'
import Hero from '../heroCompunents/heroSection/hero'
import State from '../heroCompunents/stateBur/state'
import CardCloud from '../heroCompunents/cloudAllCard/cardCloud'
import WhatT from '../heroCompunents/whatTOCS/whatT'
import ClassRom from '../heroCompunents/classroomSec/class'
import Feature from '../heroCompunents/featureSection/featur'
import Tool from '../heroCompunents/teachersTols/tool'
import Quizzes from '../heroCompunents/quize/quiz'
import Mang from '../heroCompunents/manegment/mang'
import Discution from '../heroCompunents/discution/discution'
import NewsSection from '../heroCompunents/newsLatter/newsleter'

function IndexFile() {
  return (
    <div>
   
       <Hero />
       <State />
       <CardCloud />
       <WhatT />
       <ClassRom />
        <Feature />
        <Tool />
        <Quizzes />
       <Mang />
       <Discution />
       <NewsSection />


     
    </div>
  )
}

export default IndexFile