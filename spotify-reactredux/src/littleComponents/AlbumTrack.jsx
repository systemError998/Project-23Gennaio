import React from 'react'

export default function AlbumTrack({track}) {

    console.log(track);

    return (
        <div className='row mb-3'>
            <div className="col-1 indice text-center">{}</div>
            <div className="col-5 d-flex flex-column">
                {track.title}
                <span className="featuringTracks"> {track.artist && track.artist.name} </span>
            </div>
            <div className="col-1"></div>
            <div className="col-3">{track.rank}</div>
            <div className="col-2">{track.duration}</div>
        </div>
    )
}
