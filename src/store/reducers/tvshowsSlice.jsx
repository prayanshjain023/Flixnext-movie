import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    info: null
}

export const tvshowsSlice = createSlice({
    name:'tvshows',
    initialState,
    reducers: {
        loadTvshows : (state, action) =>{
            state.info = action.payload
        },
        removeTvshows : (state, action) =>{
            state.info = null
        }
    }
})

export const { loadTvshows, removeTvshows } = tvshowsSlice.actions
export default tvshowsSlice.reducer;
