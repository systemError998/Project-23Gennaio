import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CardArtist({artist , index }) {

    const navigate = useNavigate()

    console.log(artist);
    //console.log(artist ? console.log(artist[index].artist.name) : null);

  return (
    <div className='card' style={{width: '22%'}} onClick={() => navigate("/artist/"+artist.id)}>
        <a className="">
            <img src={artist.artist ? artist.artist.picture_medium : null} className="card-img-top rounded-circle" alt="..." />
        </a>      
        <div className="card-body pb-1">
            <p className="card-title text-truncate">
                <a href="#" className="text-decoration-none text-white"></a>
            </p>
            <p className="card-text">{artist.artist ? artist.artist.name : null}</p>
            <button className="playHoverLongCard position-absolute">
                <i className="bi bi-play-fill"></i>
            </button>
        </div>
    </div>
  )
}
