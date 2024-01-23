import './App.css'
import { BrowserRouter , Routes , Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import ArtistPage from './pages/ArtistPage';
import AlbumPage from './pages/AlbumPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="container-fluid contenitore">
        <div className="row riga d-flex justify-content-between">
          <Routes>
            <Route path="/" element={<HomePage />}/> 
            <Route path="/artist" element={<ArtistPage />}/> 
            <Route path="/album" element={<AlbumPage />} /> 
            <Route path="/search" element={<SearchPage />} /> 
            <Route path="*" element={<NotFoundPage />} /> 
          </Routes>
        </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
