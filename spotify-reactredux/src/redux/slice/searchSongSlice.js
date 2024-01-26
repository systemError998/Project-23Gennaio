import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { url , XRapidAPIKey, XRapidAPIHost } from "../../dati/dati";
import axios from "axios";

const initialState = {
    searchedSong: [],
    loading: false,
    error: ""
}; 

export const searchSong = createAsyncThunk("songSearch/fetch", async (query) => {
    console.log("sono nella fetch search");
    console.log(query);
    const response = await axios.get(url+query , {
      headers: {
        "X-RapidAPI-Key": XRapidAPIKey,
        "X-RapidAPI-Host": XRapidAPIHost
      }
    } )
    console.log(response.data.data);
    return response.data.data
})

const searchSongSlice = createSlice({
        name: 'songSearch',
        initialState: initialState,
        reducers: {

        },
        extraReducers: builder => {
            builder.addCase(searchSong.pending, (state, action) => {
                state.loading = true
              })
              .addCase(searchSong.rejected, (state, action) => {
                state.loading = false
                state.error = "Errore nel caricamento dei dati!!!"
              })
              .addCase(searchSong.fulfilled, (state, action) => {
                state.loading = false 
                console.log(action.payload);
                state.searchedSong = [...action.payload]
              })
            }
    }
)

const { reducer } = searchSongSlice;
export default reducer;