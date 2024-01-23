import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { url , XRapidAPIKey, XRapidAPIHost } from "../../dati/dati";
import axios from "axios";

const initialState = {
  artistRow: [[],[],[]],
  loading: false,
  error: ""
} 

export const fetchRowArtist = createAsyncThunk("users/fetch", async () => {
    return await axios.get(url , {
      headers: {
        "X-RapidAPI-Key": XRapidAPIKey,
        "X-RapidAPI-Host": XRapidAPIHost
      }
    } )
    .then ((response) => response.data)
    .catch ((error) => console.log(error))
})

// lo Slice è un elemento composto da nome, statoiniziale, reducers, azioni extrareducers
const artistRowSlice = createSlice({
    name: 'artistRow',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchRowArtist.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchRowArtist.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload;
        })
        .addCase(fetchRowArtist.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    }
  })
  
const { reducer, actions } = artistRowSlice;
export const { addUser, deleteUser } = actions;
export default reducer

// export default usersSlice.reducer
// export { actions.addUser, actions.deleteUser}