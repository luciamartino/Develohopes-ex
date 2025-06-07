import { useState } from "react";

export function useCurrentLocation() {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const handleLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation(position.coords);
                setLoading(false);
            },
            (error) => {
                setError(error);
                setLoading(false);
            }
        );
    };

    return { location, loading, error, handleLocation };
}
