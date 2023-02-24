import { useState, useEffect } from "react";

// React hook to return user's spotify auth token
const useToken = () => {
    const [token, setToken] = useState(null);
    const [isTokenReady, setIsTokenReady] = useState(false);

    useEffect(() => {
        const hash = window.location.hash
        if (hash) {
            setToken(windowHashToToken(hash));
            setIsTokenReady(true);
        }
    });

    return [token, isTokenReady]
}

const windowHashToToken = (hash) => hash.substring(1).split('&')[0].split('=')[1]

export default useToken;