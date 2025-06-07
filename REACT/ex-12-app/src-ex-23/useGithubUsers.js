import useSWR from "swr";

export function useGithubUser(username) {
    const { data, error, isLoading, mutate } = useSWR(
        username ? `https://api.github.com/users/${username}` : null
    );

    function handleRefreshUsers() {
        mutate();
    }

    return {
        users: data,
        error,
        onRefresh: handleRefreshUsers,
        isLoading,
    };
}
