import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";

// const api = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(false);

    // async function fetchData(){
    //     setLoading(true);
    //     try{
    //         const url = `https://api.giphy.com/v1/gifs/random?api_key=${api}`;
    //         const {data} =  await axios.get(url);
    //         const imageSrc = data.data.images.downsized_large.url;
    //         setGif(imageSrc);
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    //     setLoading(false);
    // };
    // useEffect( () => {
    //     fetchData();
    // },[]);

    const {gif, loading, fetchData} = useGif();

    function clickHandler(){
        fetchData();
    }

    return (
        <div className="w-[47%] mt-[40px] bg-green-400 mx-auto rounded-2xl border border-black flex flex-col  items-center gap-y-5">
            <h1 className="uppercase text-2xl underline font-bold mt-[20px]">
                A Random GIF
            </h1>

            <div>
                {
                    loading ? (<Spinner />) : (<img src={gif} width={450} />)
                }
            </div>
            

            <button onClick={clickHandler} className="bg-white bg-opacity-70 w-[80%] uppercase rounded-lg py-2 mb-[20px] font-semibold hover:bg-white transition-all duration-100">
                Generate
            </button>
        </div>
    );
}

export default Random