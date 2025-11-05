import React from 'react'
import CoursHero from '../coursHero/coursHero'
import CoursItems from '../coursItems/items'
import LearnPlatfrom from '../learningPlatform/learnPlatfrom'
import Requmanded from '../requmandedCourse/requmanded'
import Creator from '../creators/creator'
import Bio from '../bio/bio'

function CoursIndex() {
  return (
    <div>
      <CoursHero />
      <CoursItems />
      <LearnPlatfrom />
      <Requmanded />
      <Creator />
      <Bio />
    </div>
  )
}

export default CoursIndex