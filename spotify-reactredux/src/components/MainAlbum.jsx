import React ,{ useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { urlAlbum , XRapidAPIKey , XRapidAPIHost } from '../dati/dati';
import AlbumTrack from '../littleComponents/AlbumTrack';
import ProfileBar from '../littleComponents/ProfileBar';
import { fetchRowAlbum }  from '../redux/slice/albumRowSlice';

export default function MainAlbum() {

    const [ idAlbum , setIdAlbum ]  = useState('')

    const { id } = useParams()
    console.log(id);

    useEffect(() => {
        axios.get(urlAlbum+id, {
            headers: {
              "X-RapidAPI-Key": XRapidAPIKey,
              "X-RapidAPI-Host": XRapidAPIHost
            }
          } )
          .then(response => { setIdAlbum(response.data)})
          .catch(error => console.error(error))
    }, [])

    console.log(urlAlbum);
    console.log(idAlbum);


    return (
        <>
            <div className="centroAnna centroFelipe text-white rounded px-0">
                <div className="card bg-dark text-white border border-0">
                    <img
                        className="card-img bannerimg cardSizing container-fluid px-0 copertinaAlbumLarge"
                        id="bannerArtist"
                        src={idAlbum.cover_big}
                        alt="Card image"
                    />
                    
                    <div className="card-img-overlay">
                        
                        <ProfileBar/>
                        
                        <div className="custom-mt">
                            <img
                                className="copertinaAlbumSmall rounded-1 me-3"
                                src={idAlbum.cover_medium}
                                alt=""
                                style={{ width: 180, height: 180 }}
                            />
                            <div className="albumInfo">
                                <p className="px-2">ALBUM</p>
                                <h1 className="card-title albumName">{idAlbum.title}</h1>
                                <p className="mt-3 artistAlbumName" id="fansArtist">{idAlbum.artist && idAlbum.artist.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col mt-2 p-2 mb-4 d-flex align-items-center">
                    <div className="d-flex px-2 mb-2">
                        <i className="bi bi-play-circle-fill text-success p-2 fs-1" />
                        <i className="bi bi-shuffle  p-2 fs-1 me-1" />
                        <i className="bi bi-suit-heart p-2 fs-1 me-2" />
                        <i className="bi bi-arrow-down-circle p-2 fs-1 me-2" />
                        <i className="bi bi-three-dots p-2 fs-1 me-2" />
                    </div>
                </div>
                <div className="row container-fluid">
                    <div className="col-xl-12 col-lg-12 infoList mb-3">
                        <div className="row rigaAlbum mx-2">
                            <div className="col-1">#</div>
                            <div className="col-5">Titolo</div>
                            <div className="col-1" />
                            <div className="col-3 riproduzioni">Riproduzioni</div>
                            <div className="col-2">
                                <i className="bi bi-clock" />
                            </div>
                        </div>
                        <div className="container bg-transparent pt-3 listaPrincipale"></div>
                        <div className="container bg-transparent d-none listaNascosta"></div>
                    </div>
                    <hr className="hrAlbum" />
                    <div className="container bg-transparent pt-3 tracksAlbumContainer">
                        {idAlbum.tracks && idAlbum.tracks.data.map((track) => (
                            <AlbumTrack key={track.id} track={track} />
                        ))}
                    </div>
                    <div className="pt-5 px-4">
                        <h4>Discografia</h4>
                        <div className="btnDisco py-3">
                            <button>Album</button>
                            <button>Singoli ed EP</button>
                        </div>
                        <div className="longCard d-flex justify-content-between"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
