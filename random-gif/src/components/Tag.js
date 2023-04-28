import react, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Tag() {
    
    const[tag,setTag] = useState("iron man");
    const {gif,loading,fetachData} = useGif(tag);

    function clickHandler() {
        fetachData();
    }

    function changeHandler(event) {
        setTag(event.target.value)
    }

    return(
        <div className="bg-blue-500 w-1/2 rounded-lg border border-black flex flex-col items-center gap-5 mt-[15px]">

            <h1 className="mt-[15px] text-2xl font-bold underline uppercase">
                Random {tag} GIFS
            </h1>

            {
                loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
            }

            <input
                className="w-10/12 bg-white py-2 rounded-xl font-bold text-center"
                onChange={changeHandler}
                value={tag}
            />

            <button className="w-10/12 bg-white py-2 rounded-xl font-bold mb-[20px]" onClick={clickHandler}>
                Generate
            </button>

        </div>
    )
}

export default Tag;