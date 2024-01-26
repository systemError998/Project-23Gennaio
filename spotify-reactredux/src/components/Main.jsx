import React from 'react'
import { useEffect  } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CardArtist from '../littleComponents/CardArist';
import CardAlbum from '../littleComponents/CardAlbum';
import Playlist from '../littleComponents/Playlist';
import MainSong from '../littleComponents/MainSong'
import ProfileBar from '../littleComponents/ProfileBar';

import { fetchRowArtist } from '../redux/slice/artistRowSlice';
import { fetchRowAlbum }  from '../redux/slice/albumRowSlice';

import { random } from '../dati/dati';

export default function Main() {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const artistRow = useSelector( state => state.artistRow.artistRow )
    //console.log(artistRow.data);
    const albumRow = useSelector( state => state.albumRow.albumRow )
    //console.log(albumRow.data)

    useEffect(() => {
      if(artistRow.length === 0) {
        dispatch(fetchRowArtist())
      }
    }, [artistRow])

    useEffect(() => {
      if(albumRow.length === 0) {
        dispatch(fetchRowAlbum())
      }
    }, [albumRow]) 

    //chiamata senza store E funzia
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

            <ProfileBar />

            <MainSong />

            {/* Section Playlist */}
            <h3>Playlist</h3>
            
            <div className="cards d-flex flex-wrap justify-content-between position-relative">
            <Playlist 
                titlePlaylist = {"sad songs 😿"}
                url1="https://e-cdns-images.dzcdn.net/images/cover/b151b3a82e1c68e0b2de2f26873284e9/250x250-000000-80-0-0.jpg"
                url2="https://e-cdns-images.dzcdn.net/images/cover/3c129daa8da04535481ade72d903f420/250x250-000000-80-0-0.jpg"
                url3="https://e-cdns-images.dzcdn.net/images/cover/e16fc4ea5e6cecceb1797ff572360e69/250x250-000000-80-0-0.jpg"
                url4="https://e-cdns-images.dzcdn.net/images/cover/7b0ec693537027a2bf2e2c24d61fff02/250x250-000000-80-0-0.jpg"
            />
            <Playlist 
                titlePlaylist = {"👯tekno👯"}
                url1="https://e-cdns-images.dzcdn.net/images/cover/c90cb5cdd87e3058239c76d6c42340e4/250x250-000000-80-0-0.jpg"
                url2="https://e-cdns-images.dzcdn.net/images/cover/3c129daa8da04535481ade72d903f420/250x250-000000-80-0-0.jpg"
                url3="https://e-cdns-images.dzcdn.net/images/cover/e16fc4ea5e6cecceb1797ff572360e69/250x250-000000-80-0-0.jpg"
                url4="https://e-cdns-images.dzcdn.net/images/cover/7b0ec693537027a2bf2e2c24d61fff02/250x250-000000-80-0-0.jpg"
            />
            <Playlist 
                titlePlaylist = {"relax music 🎶"}
                url1="https://e-cdns-images.dzcdn.net/images/cover/b151b3a82e1c68e0b2de2f26873284e9/250x250-000000-80-0-0.jpg"
                url2="https://e-cdns-images.dzcdn.net/images/cover/3c129daa8da04535481ade72d903f420/250x250-000000-80-0-0.jpg"
                url3="https://e-cdns-images.dzcdn.net/images/cover/e16fc4ea5e6cecceb1797ff572360e69/250x250-000000-80-0-0.jpg"
                url4="https://e-cdns-images.dzcdn.net/images/cover/7b0ec693537027a2bf2e2c24d61fff02/250x250-000000-80-0-0.jpg"
            />
            <Playlist 
                titlePlaylist = {"study 📚"}
                url1="https://e-cdns-images.dzcdn.net/images/cover/b151b3a82e1c68e0b2de2f26873284e9/250x250-000000-80-0-0.jpg"
                url2="https://e-cdns-images.dzcdn.net/images/cover/3c129daa8da04535481ade72d903f420/250x250-000000-80-0-0.jpg"
                url3="https://e-cdns-images.dzcdn.net/images/cover/e16fc4ea5e6cecceb1797ff572360e69/250x250-000000-80-0-0.jpg"
                url4="https://e-cdns-images.dzcdn.net/images/cover/7b0ec693537027a2bf2e2c24d61fff02/250x250-000000-80-0-0.jpg"
            />
            <Playlist 
                titlePlaylist = {"gym 🏋️‍♂️"}
                url1="https://e-cdns-images.dzcdn.net/images/cover/b151b3a82e1c68e0b2de2f26873284e9/250x250-000000-80-0-0.jpg"
                url2="https://e-cdns-images.dzcdn.net/images/cover/3c129daa8da04535481ade72d903f420/250x250-000000-80-0-0.jpg"
                url3="https://e-cdns-images.dzcdn.net/images/cover/e16fc4ea5e6cecceb1797ff572360e69/250x250-000000-80-0-0.jpg"
                url4="https://e-cdns-images.dzcdn.net/images/cover/7b0ec693537027a2bf2e2c24d61fff02/250x250-000000-80-0-0.jpg"
            />
            <Playlist 
                titlePlaylist = {"💜 hiphop"}
                url1="https://e-cdns-images.dzcdn.net/images/cover/b151b3a82e1c68e0b2de2f26873284e9/250x250-000000-80-0-0.jpg"
                url2="https://e-cdns-images.dzcdn.net/images/cover/3c129daa8da04535481ade72d903f420/250x250-000000-80-0-0.jpg"
                url3="https://e-cdns-images.dzcdn.net/images/cover/e16fc4ea5e6cecceb1797ff572360e69/250x250-000000-80-0-0.jpg"
                url4="https://e-cdns-images.dzcdn.net/images/cover/7b0ec693537027a2bf2e2c24d61fff02/250x250-000000-80-0-0.jpg"
            />

            </div>

            <div className="d-flex mt-4 mostraAltro">
              <h4 className="pe-auto">Artisti che ti piacciono</h4>
              <p className="ms-auto para">VISUALIZZA TUTTO</p>
            </div>
            <div className="longCard artisti d-flex flex-wrap justify-content-between">
              {artistRow.data && artistRow.data.slice(0,4).map((artist) => (
                <CardArtist key={artist.id} artist={artist} index={random()} />
              ))}
            </div>
            <div className="longCard artistiMobile justify-content-between carousel-container"></div>
            <div className="d-flex mt-4 mostraAltro">
              <h4 className="">I tuoi album preferiti</h4>
              <p className="ms-auto para mb-0">VISUALIZZA TUTTO</p>
            </div>
            <div className="longCard2 album carousel-container longCard d-flex flex-wrap justify-content-between">
              {albumRow.data && albumRow.data.slice(1,5).map((album) => (
                <CardAlbum key={album.id} album={album} index={random()} />
              ))}
            </div>
            <div className="d-flex mt-4 mostraAltro">
              <h4>Gli album del momento</h4>
              <p className="ms-auto para mb-0">VISUALIZZA TUTTO</p>
            </div>
            <div className="longCard3 longCard d-flex flex-wrap justify-content-between">
              {albumRow.data && albumRow.data.slice(5,9).map((album) => (
                <CardAlbum key={album.id} album={album} index={random()} />
              ))}
            </div>
          </div>
        </div>

    </> 
    
    
    )
}

{/* <div className="longCard artisti d-flex flex-wrap justify-content-between">
{artistRow.data && artistRow.data.map((artist) => (
    <CardArtist key={artist.id} artist={artist} index={random()}/>
))}
</div>
<div className="longCard artistiMobile justify-content-between carousel-container"></div>
<div className="d-flex mt-4 mostraAltro">
<h4 className="">I tuoi album preferiti</h4>
<p className="ms-auto para mb-0">VISUALIZZA TUTTO</p>
</div>
<div className="longCard2 album carousel-container longCard d-flex flex-wrap justify-content-between">
{albumRow.data && albumRow.data.map((album) => (
    <CardAlbum key={album.id} album={album} index={random()}/> 
))}  
</div>
<div className="d-flex mt-4 mostraAltro">
<h4>Gli album del momento</h4>
<p className="ms-auto para mb-0">VISUALIZZA TUTTO</p>
</div>
<div className="longCard3 longCard d-flex flex-wrap justify-content-between">                
{albumRow.data && albumRow.data.map((album) => (
    <CardAlbum key={album.id} album={album} index={random()}/> 
))}
</div>
 */}