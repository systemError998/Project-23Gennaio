import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { url , XRapidAPIKey, XRapidAPIHost } from "../../dati/dati";
import axios from "axios";

const initialState = {
  artistRow: [],
  loading: false,
  error: ""
} 

const nomiRandom = [
  "Caparezza","Salmo","Marracash","Fabri Fibra","Sfera Ebbasta","Nitro","Lazza","Rkomi","Clementino","Mezzosangue","Emis Killa","Luche","Noyz Narcos","Fedez","J-Ax","Ensi","Madman","Gemitaiz","Eminem", "Jay-Z", "Kendrick Lamar", "Nas", "Drake", "Snoop Dogg", "Kanye West", "Cardi B", "Travis Scott", "Lil Wayne", "Nicki Minaj", "Future", "Megan Thee Stallion", "J. Cole", "Lil Uzi Vert", "A$AP Rocky", "Chance the Rapper", "Logic", "2Pac", "Biggie Smalls", "Wiz Khalifa", "Missy Elliott", "Ice Cube", "DMX", "50 Cent", "Lauryn Hill", "Kid Cudi", "Run-D.M.C.", "Public Enemy"
];
const artistRandom = nomiRandom[Math.floor(Math.random() * nomiRandom.length)]

export const fetchRowArtist = createAsyncThunk("artistRow/fetch", async () => {
    //console.log("sono in fetch row");
    const response = await axios.get(url+artistRandom , {
      headers: {
        "X-RapidAPI-Key": XRapidAPIKey,
        "X-RapidAPI-Host": XRapidAPIHost
      }
    } )
    return response.data
})

// lo Slice è un elemento composto da nome, statoiniziale, reducers, azioni extrareducers
const artistRowSlice = createSlice({
    name: 'artistRow',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchRowArtist.pending, (state) => {
          state.loading = 'loading';
        })
        .addCase(fetchRowArtist.fulfilled, (state, action) => {
          state.loading = 'succeeded';
          state.artistRow = action.payload;
        })
        .addCase(fetchRowArtist.rejected, (state, action) => {
          state.loading = 'failed';
          state.error = action.error.message;
        });
    }
  })
  
const { reducer, actions } = artistRowSlice;
export const { addUser, deleteUser } = actions;
export default reducer

// export default usersSlice.reducer
// export { actions.addUser, actions.deleteUser}