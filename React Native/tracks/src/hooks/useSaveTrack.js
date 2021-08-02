import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext"
import { Context as LocationContext } from "../context/LocationContext"
import { navigate } from "../navigationRef";

//LocationContext and TrackContext work with each other for save our list of tracks

export default () => {

    //pull some information LocationContext and TrackContext
    const { createTrack } = useContext(TrackContext);

    //for use save tracks
    const { state: { locations, name }, reset } = useContext(LocationContext);


    const saveTrack = async () => {
        await createTrack(name, locations);
        reset();
        //kaydettikten sonra TrackList ekranına dönmesi için
        navigate("TrackList")
    };

    //call function for saving tracks
    //value inside of array --- TrackForm da kullanılabilesi için [saveTrack]
    return [saveTrack];

};