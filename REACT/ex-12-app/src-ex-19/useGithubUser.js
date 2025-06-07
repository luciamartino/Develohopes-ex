import { useEffect, useState } from "react";

export function useGithubUser(username) {
    const [user, setUser] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await fetch(
                `https://api.github.com/users/${username}`
            );
            const data = await response.json();
            setUser(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    getData();

    return { user, error, loading, getData };
}
