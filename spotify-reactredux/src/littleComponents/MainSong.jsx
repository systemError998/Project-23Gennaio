import React, { useEffect , useState } from 'react'
import { url , XRapidAPIKey , XRapidAPIHost } from '../dati/dati'
import axios from 'axios'
import { random } from '../dati/dati';
import { useNavigate , useParams } from 'react-router-dom';

export default function MainSong() {

  //console.log(random())
  const navigate = useNavigate()
  const params = useParams()

  const [mainSong, setMainSong] = useState({})

  useEffect(() => {
    axios.get(url + "mezzosangue", {
      headers: {
        "X-RapidAPI-Key": XRapidAPIKey,
        "X-RapidAPI-Host": XRapidAPIHost
      }
    })
      .then(response => {
        //console.log(response.data.data)
        setMainSong(response.data.data)
      })
      .catch(error => console.error("errore chiamata mainSong" + error))
  }, [])

  const randomIndex = random()
  //console.log("main song " + mainSong[random()]);

  return (
    <>
      <div id="canzonciona" className="card big-card mb-3 canzonciona">
        <div className="row g-0 d-flex align-items-center">
          <div className="col-3  foto">
            <img
              /* onClick={() => navigate(`/album/${mainSong[random()].album.id}`)} */
              src={mainSong[randomIndex] ? mainSong[randomIndex].album.cover_medium : null}
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
              <h1 className="card-title pt-0 fw-bold truncate-text">{mainSong[randomIndex] ? mainSong[randomIndex].title : null}</h1>
              <p className="card-text1">{mainSong[randomIndex] ? mainSong[randomIndex].artist.name : null}</p>
            </div>
            <div className="bottoniUp mt-2">
              <button className="playBC">Play</button>
              <button className="">Salva</button>
              <i className="bi bi-three-dots" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
