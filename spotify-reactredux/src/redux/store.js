import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // localstorage
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from 'redux-persist-transform-encrypt';

import artistRowSlice from "./slice/artistRowSlice";

const rootReducer = combineReducers({
    artistRow: ArtistRowSlice,
});


export const store = configureStore({
    reducer: {
        artistRow: artistRowSlice.reducer,
    }
})