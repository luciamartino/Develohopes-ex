import { useCurrentLocation } from "./useCurrentLocation"

export function Location(){

const {location, handleLocation, error, loading } = useCurrentLocation()

    if (error) {
        return <p>there's an error</p>;
    }

    if (loading && user) {
        return <p>is loading...</p>;
    }

    return(
        <>
            <button onClick={handleLocation}>get current location</button>
            {location &&
            <>
                <div>{location.longitude}</div>
                <div> {location.latitude}</div>
            </>}
        </>
    )
}