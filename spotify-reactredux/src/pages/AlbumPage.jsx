import React from 'react'

import MainAlbum from '../components/MainAlbum'
import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'
import Player from '../components/Player'

export default function AlbumPage() {
  return (
    <>
      <LeftBar />
      <MainAlbum />
      <RightBar />
      <Player />
    </>
  )
}
