import React from 'react'

import MainSearch from '../components/MainSearch'
import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'
import Player from '../components/Player'

export default function SearchPage() {
  return (
    <>
      <LeftBar />
      <MainSearch />
      <RightBar />
      <Player />
    </>
  )
}