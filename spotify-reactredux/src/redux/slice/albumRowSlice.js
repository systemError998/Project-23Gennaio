import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { url , XRapidAPIKey, XRapidAPIHost } from "../../dati/dati";
import axios from "axios";

const initialState = {
  albumRow: [],
  loading: false,
  error: ""
} 

const paroleAlbum = [
  "Bling", "Grind", "Hustle", "Cash", "Lyrical", "Swagger", "Crew", "Thug", "Gangsta",
  "Flow", "Chillin'", "Homie", "Money", "Ghetto", "Ride", "VIP", "Crazy", "Loud", "Street",
  "Ballin'", "Boss", "Trap", "Dope", "Phat", "Hater", "Rack", "Flex", "Pimpin'", "Game",
  "Player", "Poppin'", "Ice", "Ratchet", "Sippin'", "Gucci", "Rollin'", "Wassup", "Cruise",
  "Laidback", "Savage", "Lit", "Turnt"
];
const albumRandom = paroleAlbum[Math.floor(Math.random() * paroleAlbum.length)]

export const fetchRowAlbum = createAsyncThunk("albumRow/fetch", async () => {
    //console.log("sono in fetch ALBUM");
    const response = await axios.get(url+albumRandom , {
      headers: {
        "X-RapidAPI-Key": XRapidAPIKey,
        "X-RapidAPI-Host": XRapidAPIHost
      }
    } )
    return response.data
})

// lo Slice è un elemento composto da nome, statoiniziale, reducers, azioni extrareducers
const albumRowSlice = createSlice({
    name: 'albumRow',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchRowAlbum.pending, (state) => {
          state.loading = 'loading';
        })
        .addCase(fetchRowAlbum.fulfilled, (state, action) => {
          state.loading = 'succeeded';
          state.albumRow = action.payload;
        })
        .addCase(fetchRowAlbum.rejected, (state, action) => {
          state.loading = 'failed';
          state.error = action.error.message;
        });
    }
  })
  
const { reducer, actions } = albumRowSlice;
export default reducer

// export default usersSlice.reducer
// export { actions.addUser, actions.deleteUser}