import { useState, useEffect } from "react";
import useToken from "./useToken";

const LIMIT = 10;
const TIME_PERIOD = "short_term";
const TOP_SONGS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?limit=${LIMIT}&time_range=${TIME_PERIOD}`;

// React hook to return user's top songs
const useTopSongs = () => {
    const [token, isTokenReady] = useToken();
    const [topSongs, setTopSongs] = useState([]);
    const [isTopSongsReady, setIsTopSongsReady] = useState(false);

    useEffect(() => {
        const getTopSongs = async () => {
            if (isTokenReady) {
                const requestHeaders = {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                };
                const data =
                    await fetch(TOP_SONGS_ENDPOINT, {
                        headers: requestHeaders
                    }).then(response => response.json());
                setTopSongs(data);
                setIsTopSongsReady(true);
            }
        }
        getTopSongs();
    }, [token, isTokenReady])

    return [topSongs, isTopSongsReady]
}

export default useTopSongs;