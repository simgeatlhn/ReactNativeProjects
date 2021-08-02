import { useState, useEffect } from "react";
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from "expo-location";

//shouldTrak = isFocused
//shouldTrack - true = startTracking , shouldTrack - false = stopTracking

export default (shouldTrack, callback) => {

    const [err, setErr] = useState(null);
    //const [subscriber, setSubscriber] = useState(null);

    useEffect(() => {
        // Listener for watchPositionAsync.
        let subscriber;

        //helper function
        //startWatching fonksiyonu haritaya erişimde izin istemek için
        const startWatching = async () => {

            try {
                await requestForegroundPermissionsAsync();
                subscriber = await watchPositionAsync(
                    {
                        accuracy: Accuracy.BestForNavigation,
                        timeInterval: 1000, //süre
                        distanceInterval: 10 //metre
                    },
                    callback  //callback = reference prop of helper function
                    //old version of callback //user's location
                );
                //setSubscriber(sub);//konum değiştikçe
            } catch (e) {
                setErr(e);
            }
        };


        //subscriber = var olan konum
        if (shouldTrack) {
            startWatching();
        } else {
            subscriber ? subscriber.remove() : null;
            subscriber = null;
        }

        //SOLUTION - every single time a user's location gets updated
        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        };

    }, [shouldTrack, callback]);//DEPENDECY LIST // [] = one time run //new version of callback


    return [err];
}

//version of callback = state.recording from TrackCreateScreen



