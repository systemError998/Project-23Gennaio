import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { url , XRapidAPIKey, XRapidAPIHost } from '../dati/dati';
import fetchRowArtist from '../redux/slice/artistRowSlice'


export default function Main() {

    const dispatch = useDispatch();

  /*   useEffect(() => {
      axios.get(url+"soldi", {
        headers: {
          "X-RapidAPI-Key": XRapidAPIKey,
          "X-RapidAPI-Host": XRapidAPIHost
        }
      })
      .then(response => console.log(response))
      .catch(error => console.error(error))
    }, [url, XRapidAPIKey, XRapidAPIHost] )
  */

    
    return (
    <>
        <div className="centroLeo overflow-auto">
          <div className="p-3 container rigaNascosta  d-none">
            <div className="d-flex mt-2 mb-4 mostraMeno align-self-start">
              <h4 className="pe-auto">Artisti che ti piacciono</h4>
              <p className="ms-auto para">Indietro</p>
            </div>
            <div className="carteNascoste d-flex flex-wrap justify-content-between"></div>
          </div>
          <div className="p-3 container rigaNascosta d-none">
            <div className="d-flex mt-2 mb-4 mostraMeno align-self-start">
              <h4 className="pe-auto">I tuoi album preferiti</h4>
              <p className="ms-auto para">Indietro</p>
            </div>
            <div className="carteNascoste d-flex flex-wrap justify-content-between"></div>
          </div>
          <div className="p-3 container rigaNascosta d-none">
            <div className="d-flex mt-2 mb-4 mostraMeno align-self-start">
              <h4 className="pe-auto">Gli album del momento</h4>
              <p className="ms-auto para">Indietro</p>
            </div>
            <div className="carteNascoste d-flex flex-wrap justify-content-between"></div>
          </div>
          <div className="container finestrona">
            <div className="d-flex mb-3">
              <div className="freccette me-3 lefty">
                <i className="bi bi-chevron-left rounded-circle" />
              </div>
              <div className="freccette righty">
                <i className="bi bi-chevron-right rounded-circle" />
              </div>
              <div className="ms-auto rigaMobile">
                <ul className="d-flex me-auto mb-2 mb-lg-0">
                  <li className="nav-item fotoProfilo">
                    <img
                      className="rounded-circle"
                      src="assets/imgs/main/image-17.jpg"
                      alt=""
                    />
                  </li>
                  <li className="nav-item dropdown-center nomeProfilo">
                    <a
                      className="nav-link dropdown-toggle"
                      
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sarah Linn
                    </a>
                    <ul className="dropdown-menu mt-2">
                      <li>
                        <a className="dropdown-item text-white dropMenu" >
                          Il mio profilo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-white dropMenu" >
                          Impostazioni
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider text-white" />
                      </li>
                      <li>
                        <a className="dropdown-item text-white dropMenu" >
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="bottoniMobile d-sm-none">
                  <li className="nav-item">
                    <button className="primo">Tutti</button>
                  </li>
                  <li className="nav-item">
                    <button>Musica</button>
                  </li>
                  <li className="nav-item">
                    <button>Poadcast</button>
                  </li>
                </ul>
              </div>
            </div>
            <div id="canzonciona" className="card big-card mb-3 canzonciona">
              <div className="row g-0 d-flex align-items-center">
                <div className="col-3  foto">
                  <img
                    src=""
                    className="img-fluid rounded-start imgBC ps-3 "
                    alt="..."
                  />
                </div>
                <div className="pt-3 pb-3 testoBC">
                  <div className="d-flex testoUp justify-content-between pe-2 pb-0">
                    <p className="card-text2">Album</p>
                    <p className="ms-auto">NASCONDI ANNUNCI</p>
                  </div>
                  <div className=" lh-0 pt-0">
                    <h1 className="card-title pt-0 fw-bold truncate-text" />
                    <p className="card-text1" />
                  </div>
                  <div className="bottoniUp mt-2">
                    <button className="playBC">Play</button>
                    <button className="">Salva</button>
                    <i className="bi bi-three-dots" />
                  </div>
                </div>
              </div>
            </div>
            <h3>Playlist</h3>
            <div className="cards d-flex flex-wrap justify-content-between position-relative">
              <div
                className="card mb-3"
                style={{ width: "31%" }}
              >
                <div className="row g-0">
                  <div className="col-3 rounded-start overflow-hidden">
                    <div className="h-100">
                      <div className="d-flex w-100 h-50">
                        <img
                          src="https://e-cdns-images.dzcdn.net/images/cover/c90cb5cdd87e3058239c76d6c42340e4/250x250-000000-80-0-0.jpg"
                          className="img-fluid "
                          style={{ width: "50%" }}
                          alt="..."
                        />
                        <img
                          src="https://e-cdns-images.dzcdn.net/images/cover/fb4e3793bb98e1ffb8905d569b6c20c9/250x250-000000-80-0-0.jpg"
                          className="img-fluid "
                          style={{ width: "50%" }}
                          alt="..."
                        />
                      </div>
                      <div className="d-flex w-100 h-50">
                        <img
                          src="https://e-cdns-images.dzcdn.net/images/cover/ad2b4846215bf780f3c653b1f3efc9e5/250x250-000000-80-0-0.jpg"
                          className="img-fluid "
                          style={{ width: "50%" }}
                          alt="..."
                        />
                        <img
                          src="https://e-cdns-images.dzcdn.net/images/cover/afe09151418f5ecf7ed6deb8c86cefbe/250x250-000000-80-0-0.jpg"
                          className="img-fluid "
                          style={{ width: "50%" }}
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-9 body rounded-end-1">
                    <p className="truncate-text mb-0">Buttarsi sotto 'n treno</p>
                  </div>
                  <button className="playHover position-absolute">
                    <i className="bi bi-play-fill" />
                  </button>
                </div>
              </div>
              <div
                className="card mb-3"
                style={{ width: "31%" }}
              >
                <div className="row g-0">
                  <div className="col-3 rounded-start overflow-hidden">
                    <div className="h-100">
                      <div className="d-flex w-100 h-50 rounded-start">
                        <img
                          src="https://e-cdns-images.dzcdn.net/images/cover/b151b3a82e1c68e0b2de2f26873284e9/250x250-000000-80-0-0.jpg"
                          className="img-fluid "
                          style={{ width: "50%" }}
                          alt="..."
                        />
                        <img
                          src="https://e-cdns-images.dzcdn.net/images/cover/3c129daa8da04535481ade72d903f420/250x250-000000-80-0-0.jpg"
                          className="img-fluid "
                          style={{ width: "50%" }}
                          alt="..."
                        />
                      </div>
                      <div className="d-flex w-100 h-50">
                        <img
                          src="https://e-cdns-images.dzcdn.net/images/cover/e16fc4ea5e6cecceb1797ff572360e69/250x250-000000-80-0-0.jpg"
                          className="img-fluid "
                          style={{ width: "50%" }}
                          alt="..."
                        />
                        <img
                          src="https://e-cdns-images.dzcdn.net/images/cover/7b0ec693537027a2bf2e2c24d61fff02/250x250-000000-80-0-0.jpg"
                          className="img-fluid "
                          style={{ width: "50%" }}
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-9 body rounded-end-1">
                    <p className="truncate-text mb-0">Scasso tutto</p>
                  </div>
                  <button className="playHover position-absolute">
                    <i className="bi bi-play-fill" />
                  </button>
                </div>
              </div>
              <div
                className="card mb-3"
                style={{ width: "31%" }}
              >
                <div className="row g-0">
                  <div className="col-3 rounded-start overflow-hidden">
                    <div className="h-100">
                      <div className="d-flex w-100 h-50 rounded-start">
                        <img
                          src="https://e-cdns-images.dzcdn.net/images/cover/dfa891eb4f7c64820806e9469c505d96/250x250-000000-80-0-0.jpg"
                          className="img-fluid "
                          style={{ width: "50%" }}
                          alt="..."
                        />
                        <img
                          src="https://e-cdns-images.dzcdn.net/images/cover/3b90105e74663fd164fceb2b0d2db3cd/250x250-000000-80-0-0.jpg"
                          className="img-fluid "
                          style={{ width: "50%" }}
                          alt="..."
                        />
                      </div>
                      <div className="d-flex w-100 h-50">
                        <img
                          src="https://e-cdns-images.dzcdn.net/images/cover/3d24aeaaa8ddb94c9e71b36ab1ac690c/250x250-000000-80-0-0.jpg"
                          className="img-fluid "
                          style={{ width: "50%" }}
                          alt="..."
                        />
                        <img
                          src="https://e-cdns-images.dzcdn.net/images/cover/ba13894e114374ef9c0815ea8984d6fe/250x250-000000-80-0-0.jpg"
                          className="img-fluid "
                          style={{ width: "50%" }}
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-9 body rounded-end-1">
                    <p className="truncate-text mb-0">Canzoni Pop</p>
                  </div>
                  <button className="playHover position-absolute">
                    <i className="bi bi-play-fill" />
                  </button>
                </div>
              </div>
              <div
                className="card mb-3"
                style={{ width: "31%" }}
              >
                <div className="row g-0">
                  <div className="col-3 rounded-start overflow-hidden">
                    <div className="h-100">
                      <div className="d-flex w-100 h-50 rounded-start">
                        <img
                          src="https://e-cdns-images.dzcdn.net/images/cover/8442e9ac0227a07b00c9dfd0ec00032d/250x250-000000-80-0-0.jpg"
                          className="img-fluid "
                          style={{ width: "50%" }}
                          alt="..."
                        />
                        <img
                          src="https://e-cdns-images.dzcdn.net/images/cover/6d7d8e46b7bfb81c4d388a645dc9e8f2/250x250-000000-80-0-0.jpg"
                          className="img-fluid "
                          style={{ width: "50%" }}
                          alt="..."
                        />
                      </div>
                      <div className="d-flex w-100 h-50">
                        <img
                          src="https://e-cdns-images.dzcdn.net/images/cover/8794f361488905bb3b62546501f4e409/250x250-000000-80-0-0.jpg"
                          className="img-fluid "
                          style={{ width: "50%" }}
                          alt="..."
                        />
                        <img
                          src="https://e-cdns-images.dzcdn.net/images/cover/1dadf15bb8ea7e829bd69b2f3966c701/250x250-000000-80-0-0.jpg"
                          className="img-fluid "
                          style={{ width: "50%" }}
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-9 body rounded-end-1">
                    <p className="truncate-text mb-0">Nanna</p>
                  </div>
                  <button className="playHover position-absolute">
                    <i className="bi bi-play-fill" />
                  </button>
                </div>
              </div>
              <div
                className="card mb-3"
                style={{ width: "31%" }}>
                <div className="row g-0">
                  <div className="col-3 d-flex">
                    <img
                      src="https://e-cdns-images.dzcdn.net/images/cover/cdae66613e2108fe86a96ae2195380a8/250x250-000000-80-0-0.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-9 body rounded-end-1">
                    <p className="truncate-text mb-0">Viaggi</p>
                  </div>
                  <button className="playHover position-absolute">
                    <i className="bi bi-play-fill" />
                  </button>
                </div>
              </div>
              <div
                className="card mb-3"
                style={{ width: "31%" }}
              >
                <div className="row g-0">
                  <div className="col-3 rounded-start overflow-hidden">
                    <div className="h-100">
                      <div className="d-flex w-100 h-50 rounded-start">
                        <img
                          src="https://e-cdns-images.dzcdn.net/images/cover/2ae6c01a51296a7ec6d89c96a4fac32c/250x250-000000-80-0-0.jpg"
                          className="img-fluid "
                          style={{ width: "50%" }}
                          alt="..."
                        />
                        <img
                          src="https://e-cdns-images.dzcdn.net/images/cover/d1f85ff41f16f8813d14cd0d67d87b50/250x250-000000-80-0-0.jpg"
                          className="img-fluid "
                          style={{ width: "50%" }}
                          alt="..."
                        />
                      </div>
                      <div className="d-flex w-100 h-50">
                        <img
                          src="https://e-cdns-images.dzcdn.net/images/cover/eceeaaae38cdfd82397920bac77e66ad/250x250-000000-80-0-0.jpg"
                          className="img-fluid "
                          style={{ width: "50%" }}
                          alt="..."
                        />
                        <img
                          src="https://e-cdns-images.dzcdn.net/images/cover/900c088fb241de8000b5ed849eba8536/250x250-000000-80-0-0.jpg"
                          className="img-fluid "
                          style={{ width: "50%" }}
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-9 body rounded-end-1">
                    <p className="truncate-text mb-0">Canzoni pe' scopà</p>
                  </div>
                  <button className="playHover position-absolute">
                    <i className="bi bi-play-fill" />
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex mt-4 mostraAltro">
              <h4 className="pe-auto">Artisti che ti piacciono</h4>
              <p className="ms-auto para">VISUALIZZA TUTTO</p>
            </div>
            <div className="longCard artisti d-flex flex-wrap justify-content-between"></div>
            <div className="longCard artistiMobile justify-content-between carousel-container"></div>
            <div className="d-flex mt-4 mostraAltro">
              <h4 className="">I tuoi album preferiti</h4>
              <p className="ms-auto para mb-0">VISUALIZZA TUTTO</p>
            </div>
            <div className="longCard2 album carousel-container longCard d-flex flex-wrap justify-content-between"></div>
            <div className="d-flex mt-4 mostraAltro">
              <h4>Gli album del momento</h4>
              <p className="ms-auto para mb-0">VISUALIZZA TUTTO</p>
            </div>
            <div className="longCard3 longCard d-flex flex-wrap justify-content-between"></div>
          </div>
        </div>

    </> 
    
    
    )
}
