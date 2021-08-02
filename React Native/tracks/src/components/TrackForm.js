import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements'
import Spacer from "./Spacer"
import { Context as LocationContext } from "../context/LocationContext"
import useSaveTrack from '../hooks/useSaveTrack'


const TrackForm = () => {

    //name , recording , locations = initial value - useLocation.js den gelir
    const { state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

    return (
        <>
            <Spacer>
                <Input value={name}
                    onChangeText={changeName}
                    placeholder="Enter a name"
                />
            </Spacer>

            <Spacer>
                {/* //change from start to stop */}
                {recording
                    ? <Button title="Stop" onPress={stopRecording} />
                    : <Button title="Start" onPress={startRecording} />
                }
            </Spacer>

            <Spacer>
                {/* //RECORDING TRACKS */}

                {!recording && locations.length ? (
                    <Button title="Save Recording" onPress={saveTrack} />
                ) : null}
            </Spacer>




        </>
    )
}

export default TrackForm
