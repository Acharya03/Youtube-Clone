import {configureStore} from "@reduxjs/toolkit/query";
import youtubeReducer from '../features/youtube/youtubeSlice'
export const store = configureStore({
    reducer: {
        youtubeApp: youtubeReducer,
    },
})

export default store;