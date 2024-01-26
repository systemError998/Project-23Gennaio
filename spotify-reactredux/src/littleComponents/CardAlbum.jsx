import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CardAlbum({album , index }) {

    const navigate = useNavigate()

    console.log(album);
    //console.log(album ? console.log(album[index].album.title) : null);

  return (
    <div className='card' style={{width: '22%'}} onClick={() => navigate("/album/"+album.id)}>
        <a className="">
            {}
            <img src={album.album ? album.album.cover_medium : null} className="card-img-top rounded-3" alt="..." />
        </a>      
        <div className="card-body pb-1">
            <p className="card-title text-truncate">
                <a href="#" className="text-decoration-none text-white"></a>
            </p>
            <p className="card-text">{album.album ? album.album.title : null}</p>
            <button className="playHoverLongCard position-absolute">
                <i className="bi bi-play-fill"></i>
            </button>
        </div>
    </div>
  )
}
