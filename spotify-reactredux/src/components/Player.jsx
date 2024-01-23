import React from 'react'

export default function Player() {
  return (
    <>
      <>
        {/* PLAYER */}
        <div className="player d-flex pt-2 px-0">
          <div className="playerRow row container-fluid pe-0">
            {/* COL SX, img, nome Artista e nome Canzone in riprod */}
            <div className="col-md-3 col-3 d-none d-md-flex">
              <div className="playerImg d-flex align-content-center justify-content-center">
                <img
                  className="playerImg"
                  src="https://m.media-amazon.com/images/I/71S1upa9iCL._UF1000,1000_QL80_.jpg"
                  alt=""
                />
              </div>
              <div className="playerNowText ms-3 text-white d-flex flex-column justify-content-center">
                <a
                  className="playerNowSong text-decoration-none text-white fw-bold"
                  
                >
                  <span className="titoletto">Another Brick In The Wall </span>
                </a>
                <a className="playerNowArtist text-decoration-none" >
                  {" "}
                  <span className="">Pink Floyd</span>
                </a>
              </div>
              <a className="d-flex align-items-center cuoricino" href="">
                <i className="bi bi-heart" />
              </a>
            </div>
            {/*  COL CENTER, comandi e progress bar */}
            <div className="d-none d-md-block col-md-6 col-6 text-center d-none d-md-block">
              <div className="playerIcons mt-1">
                <a >
                  <i className="bi bi-shuffle" />
                </a>
                <a >
                  <i className="bi bi-skip-backward-fill" />
                </a>
                <a  id="playPause">
                  <i className="bi bi-play-circle-fill" />
                </a>
                <a >
                  <i className="bi bi-skip-forward-fill" />
                </a>
                <a >
                  <i className="bi bi-repeat" />
                </a>
              </div>
              <div className="round-time-bar">
                <div />
              </div>
            </div>
            {/*  COL DX, iconcine varie e volume */}
            <div className="ms-auto iconsDx d-none  col-md-3 col-3 d-md-flex justify-content-end align-items-center">
              <a href="">
                <i className="bi bi-mic" />
              </a>
              <a href="">
                <i className="bi bi-view-list" />
              </a>
              <a href="">
                <i className="bi bi-music-player" />
              </a>
              <a  id="muteButton">
                <i className="bi bi-volume-up-fill" />
              </a>
              <input
                type="range"
                className=" volume form-range w-25 me-2"
                id="customRange1"
              />
              <a href="">
                <i className="bi bi-arrows-angle-expand fs-5" />
              </a>
            </div>
          </div>
        </div>
      </>

    </>
  )
}
