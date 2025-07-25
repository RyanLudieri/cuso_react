import { useState, useEffect } from "react";



// 4 - custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // 5 - refatorando o post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)
    const [itemId, setItemId] = useState(null)

    // 6 - loading
    const [loading, setLoading] = useState(false);

    // 7 - tratando erros
    const [error, setError] = useState(null);


    const httpConfig = (data, method) => {
        if (method === "POST"){
            setConfig({
                method,
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });

            setMethod(method);
        }else if(method === "DELETE"){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                }
            });
            setItemId(data.id);
            setMethod(method);
        }
    };

    useEffect(() => {

        const fetchData = async () => {

            // 6 - loading
            setLoading(true);

            try{
                const res = await fetch(url);

                const json = await res.json();

                setData(json);
            } catch(error) {
                console.log(error.message);
                setError("Houve algum erro ao carregar os dados!");
            }

            setLoading(false);
        }

        fetchData();

    },[url, callFetch])

    // 5 - refatorando post
    useEffect(() => {
        const httpRequest = async () => {

            let json

            if(method === "POST"){

                let fetchOptions = [url, config];

                const res = await fetch(...fetchOptions);

                json = await res.json();

            } else if (method === "DELETE"){
                let deleteUrl = `${url}/${itemId}`

                const res = await fetch(deleteUrl, config);

                json = await res.json();   
                
            }
            setCallFetch(json)
        };

        httpRequest();
    }, [config,method, url, itemId])

    return {data, httpConfig, loading, error};
};


