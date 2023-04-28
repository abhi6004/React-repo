import react, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random() {

    const {gif,loading,fetachData} = useGif();

    function clickHandler() {
        fetachData();
    }

    return(
        <div className="bg-green-500 w-1/2 rounded-lg border border-black flex flex-col items-center gap-5 mt-[15px]">

            <h1 className="mt-[15px] text-2xl font-bold underline uppercase">Random GIFS</h1>

            {
                loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
            }

            <button className="w-10/12 bg-white py-2 rounded-xl font-bold mb-[20px]" onClick={clickHandler}>
                Generate
            </button>

        </div>
    )
}

export default Random;