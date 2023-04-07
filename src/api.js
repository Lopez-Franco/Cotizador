import { useEffect, useState } from "react"
const API_URL = 'https://6334c677ea0de5318a08ce99.mockapi.io/cotizador';
export const useGet = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        try {
            const r = await fetch(API_URL);
            const json = await r.json();
            setData(json);
        } catch (error) {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        getData();
    }, []);
    return [data, error, isLoading];
}