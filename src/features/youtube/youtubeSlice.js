import {createSlice} from "@reduxjs/toolkit";
import { getHomePageVideos } from "../../store/reducers/getHomePageVideos";

const initialState = {
    video: [],
    currentPlaying: null,
    searchTerm: "",
    searchresults: [],
    nextPage: null,
    recommendedVideo: []
}

const youtubeSlice = createSlice({
    name: "YoutubeApp",
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder.addCase(getHomePageVideos.fulfilled,(state,action) => {

        })
    }
})

export default youtubeSlice.reducer;