import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchSong } from '../redux/slice/searchSongSlice';

export default function MainSearch() {

  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const songs = useSelector( state => state.searchSong.searchedSong )

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchSong(query))
  }

  return (
    <>
   <div className="col-7 searchPage overflow-auto">
  <div className="p-3 container">
    <div className="d-flex mb-3 ">
      <div className="freccette me-3 lefty">
        <i className="bi bi-chevron-left rounded-circle" />
      </div>
      <div className="freccette righty">
        <i className="bi bi-chevron-right rounded-circle" />
      </div>
      <form 
          className="input-group mb-3 w-50 ms-3" 
          id="search"
          onSubmit={handleSearch}>
        <button
          onClick={handleSearch}
          className="btn btn-outline-secondary rounded-start-pill searchInp border border-white btnInput"
          type="submit"
          id="button-addon1"
        >
          <i className="bi bi-search" />
        </button>
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          className="form-control rounded-end-pill searchInp text-white"
          placeholder="Cosa vuoi ascoltare?"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </form>
      <div className="ms-auto">
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
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Leo Giardino
            </a>
            <ul className="dropdown-menu mt-2">
              <li>
                <a className="dropdown-item text-white dropMenu" href="#">
                  Il mio profilo
                </a>
              </li>
              <li>
                <a className="dropdown-item text-white dropMenu" href="#">
                  Impostazioni
                </a>
              </li>
              <li>
                <hr className="dropdown-divider text-white" />
              </li>
              <li>
                <a className="dropdown-item text-white dropMenu" href="#">
                  Log Out
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div className="container filtriRicerca">
      <span className="badge rounded-pill text-bg-dark p-2" id="tutto">
        Tutto
      </span>
      <span className="badge rounded-pill text-bg-dark p-2" id="brani">
        Brani
      </span>
      <span className="badge rounded-pill text-bg-dark p-2" id="artisti">
        Artisti
      </span>
      <span className="badge rounded-pill text-bg-dark p-2" id="playlist">
        Playlist
      </span>
      <span className="badge rounded-pill text-bg-dark p-2" id="profili">
        Profili
      </span>
      <span className="badge rounded-pill text-bg-dark p-2" id="podcast">
        Podcast e show
      </span>
    </div>
    <div className="d-none" id="toShow">
      <div className="container risultatiRicerca row mt-2">
        <div className="col-6">
          <h3>Risultato più rilevante</h3>
          <div className="cardRisRil rounded-2 p-3">
            <img className="rounded-circle w-25" id="imgPiuRelevante" src="" />
            <p className="h2" id="nomePiuRelevante">
              Rage Against the machine
            </p>
            <p className="h6">artista</p>
          </div>
        </div>
        <div className="col-6">
          <h3>Brani</h3>
          <div className="row mb-1" id="ulBraniParent">
          </div>
        </div>
      </div>
      <div className="container  row mt-2 " id="longCard">
        <div className="col-12 mb-2 ml-4">
          <h3>
            <p id="risultatoNome">Rage against the machine</p>
          </h3>
        </div>
        
      </div>
    </div>
    {/*INSERIRE QUI*/}
    <div className="container">
      <h4>Sfoglia tutto</h4>
    </div>
    <div className=" container row ">
      <div className="col-3 card mb-3 border border-0  divCard  overflow-hidden ">
        <div className="card-body arancio  rounded-2 squareCard overflow-hidden">
          <h5 className="card-title ">Podcast</h5>
          <img
            className="RotateImg rounded-1 ml-auto"
            src="assets/imgs/search/image-2.jpg"
            alt="img sezione"
          />
        </div>
      </div>
      <div className="col-3 card mb-3 border border-0  divCard  overflow-hidden ">
        <div className="card-body blu  rounded-2 squareCard overflow-hidden ">
          <h5 className="card-title ">Create per te</h5>
          <img
            className="RotateImg rounded-1  ml-auto"
            src="assets/imgs/search/image-4.jpg"
            alt="img sezione"
          />
        </div>
      </div>
      <div className="col-3 card mb-3 border border-0  divCard  overflow-hidden ">
        <div className="card-body fucsia  rounded-2 squareCard overflow-hidden ">
          <h5 className="card-title ">Nuove uscite</h5>
          <img
            className="RotateImg rounded-1  ml-auto"
            src="assets/imgs/search/image-26.jpg"
            alt="img sezione"
          />
        </div>
      </div>
      <div className="col-3 card mb-3 border border-0 overflow-hidden divCard">
        <div className="card-body verde  rounded-2 squareCard  overflow-hidden ">
          <h5 className="card-title ">Pop</h5>
          <img
            className="RotateImg rounded-1 ml-auto"
            src="assets/imgs/search/image-47.jpg"
            alt="img sezione"
          />
        </div>
      </div>
      <div className="col-3 card mb-3 border border-0 overflow-hidden divCard">
        <div className="card-body arancio1  rounded-2 squareCard  overflow-hidden  ">
          <h5 className="card-title ">Hip hop</h5>
          <img
            className="RotateImg rounded-1 ml-auto"
            src="assets/imgs/search/image-49.jpg"
            alt="img sezione"
          />
        </div>
      </div>
      <div className="col-3 card mb-3 border border-0 overflow-hidden divCard">
        <div className="card-body arancio  rounded-2 squareCard  overflow-hidden ">
          <h5 className="card-title ">Dance/ Elettronica</h5>
          <img
            className="RotateImg rounded-1 ml-auto"
            src="assets/imgs/search/image-3.jpg"
            alt="img sezione"
          />
        </div>
      </div>
      <div className="col-3 card mb-3 border border-0 overflow-hidden divCard">
        <div className="card-body fucsia1 rounded-2 squareCard  overflow-hidden ">
          <h5 className="card-title ">Latina</h5>
          <img
            className="RotateImg rounded-1 ml-auto"
            src="assets/imgs/search/image-5.jpg"
            alt="img sezione"
          />
        </div>
      </div>
      <div className="col-3 card mb-3 border border-0 overflow-hidden divCard">
        <div className="card-body viola  rounded-2 squareCard  overflow-hidden  ">
          <h5 className="card-title">Classifiche</h5>
          <img
            className="RotateImg rounded-1 ml-auto"
            src="assets/imgs/search/image-14.jpg"
            alt="img sezione"
          />
        </div>
      </div>
      <div className="col-3 card mb-3 border border-0 overflow-hidden divCard">
        <div className="card-body verde  rounded-2 squareCard  overflow-hidden ">
          <h5 className="card-title">Il 2023 in musica</h5>
          <img
            className="RotateImg rounded-1 ml-auto"
            src="assets/imgs/search/image-35.jpg"
            alt="img sezione"
          />
        </div>
      </div>
      <div className="col-3 card mb-3 border border-0 overflow-hidden divCard">
        <div className="card-body blu  rounded-2 squareCard  overflow-hidden ">
          <h5 className="card-title">Il 2023 in podcast</h5>
          <img
            className="RotateImg rounded-1  col-12 ml-auto"
            src="assets/imgs/search/image-15.jpg"
            alt="img sezione"
          />
        </div>
      </div>
      <div className="col-3 card mb-3 border border-0 overflow-hidden divCard">
        <div className="card-body arancio1  rounded-2 squareCard  overflow-hidden  ">
          <h5 className="card-title">Merch</h5>
          <img
            className="RotateImg rounded-1 ml-auto "
            src="assets/imgs/search/image-50.jpg"
            alt="img sezione"
          />
        </div>
      </div>
      <div className="col-3 card mb-3 border border-0 overflow-hidden d-flex divCard ">
        <div className="card-body fucsia  rounded-2 squareCard  overflow-hidden ">
          <h5 className="card-title ">Nuove uscite</h5>
          <img
            className="RotateImg rounded-1 ml-auto "
            src="assets/imgs/search/image-39.jpg"
            alt="img sezione"
          />
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
