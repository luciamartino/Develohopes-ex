import { useEffect, useState } from "react";

export function useGithubUser(username) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        try {
            const response = await fetch(
                `https://api.github.com/users/${username}`
            );
            const json = await response.json();
            setData(json);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(username);
    }, [username]);

    return { data, error, loading, onFetch: fetchData };
}
