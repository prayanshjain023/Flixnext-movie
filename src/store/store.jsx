import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducers/movieSlice'
import tvshowReducer from './reducers/tvshowsSlice'
import peopleReducer from './reducers/peoplesSlice'
import tvshowsSlice from './reducers/tvshowsSlice'

export const store = configureStore({
    reducer:{
        movie:movieReducer,
        tv:tvshowReducer,
        person:peopleReducer
    },
})