import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker"


const trackReducer = (state, action) => {
    switch (action.type) {
        case "fetch_tracks":
            return action.payload;
        default:
            return state;
    }
}

const fetchTracks = dispatch => async () => {
    //each object is a track that a user has created
    //fetchTracks fonksiyonu ile alınan tracks objeleri TrackListScreen de gösterilecek
    const response = await trackerApi.get("/tracks");
    dispatch({ type: "fetch_tracks", payload: response.data })
};

const createTrack = dispatch => async (name, locations) => {
    //make a request to our api
    //saveTrack.js de kullanılmalı
    await trackerApi.post("/tracks", { name, locations }); //tracks collection olarak mongodb de kaydedilir.(hiking)
};

export const { Context, Provider } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    [] //inital value //display on screen
);