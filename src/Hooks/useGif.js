import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

const api = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
    const url1 = `https://api.giphy.com/v1/gifs/random?api_key=${api}`;
    const url2 = `https://api.giphy.com/v1/gifs/random?api_key=${api}&tag=${tag}`;
    
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    async function fetchData(tag){
        setLoading(true);
        const {data} =  await axios.get(tag ? url2 : url1);
        console.log(data);
        const imageSrc = data.data.images.downsized_large.url;
        setGif(imageSrc);
        setLoading(false);
    };
    useEffect( () => {
        fetchData(tag);
    },[]);

    return ({gif, loading, fetchData});
}

export default useGif