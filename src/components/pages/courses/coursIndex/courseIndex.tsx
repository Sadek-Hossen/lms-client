import React from 'react'
import CoursHero from '../coursHero/coursHero'
import CoursItems from '../coursItems/items'
import LearnPlatfrom from '../learningPlatform/learnPlatfrom'
import Requmanded from '../requmandedCourse/requmanded'
import Creator from '../creators/creator'
import Bio from '../bio/bio'
import Deal from '../dealSection/deal'
import image1 from "@/app/assest/coursImage/Rectangle 187.png"
import image2 from "@/app/assest/coursImage/Rectangle 188.png"
import image3 from "@/app/assest/coursImage/Rectangle 189.png"

function CoursIndex() {
  return (
    <div>
      <CoursHero />
      <CoursItems />
      <LearnPlatfrom />
      <Requmanded />
      <Creator />
      <Bio />
      <Deal />
    </div>
  )
}

export default CoursIndex