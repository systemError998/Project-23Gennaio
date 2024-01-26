import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // localstorage
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from 'redux-persist-transform-encrypt';
import { combineReducers } from "redux";

import reducerArtistRow from "./slice/artistRowSlice";
import reducerAlbumRow from "./slice/albumRowSlice";
import reducerSearchSong from "./slice/searchSongSlice";

export const store = configureStore({
    reducer: {
        artistRow: reducerArtistRow,
        albumRow: reducerAlbumRow,
        searchSong: reducerSearchSong
    }
})