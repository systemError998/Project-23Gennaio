import React from 'react'

import Main from '../components/Main'
import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'
import Player from '../components/Player'


export default function HomePage() {
  return (
    <>
      <LeftBar />
      <Main />
      <RightBar />
      <Player />
    </>
  )
}
