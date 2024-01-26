import React from 'react'

import MainArtist from '../components/MainArtist'
import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'
import Player from '../components/Player'

export default function ArtistPage() {
  return (
    <>
      <LeftBar />
      <MainArtist />
      <RightBar />
      <Player />
    </>
  )
}
