import {createSlice} from "@reduxjs/toolkit";

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

    }
})

export default youtubeSlice.reducer;