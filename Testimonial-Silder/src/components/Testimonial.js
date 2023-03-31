import React, { useState } from "react";
import Card from "./Card";
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';

function Testimonial(props) {

    let reviews = props.reviews;
    const[index,setIndex] = useState(0);

    function leftShiftHandler() {
        if(index - 1 < 0) {
            setIndex(reviews.langth - 1);
        }

        else{
            setIndex(index - 1);
        }

    } 

    function RightShiftHandler() {
        if(index + 1 >= reviews.langth) {
            setIndex(0);
        }

        else{
            setIndex(index + 1);
        }
    }

    function SurpriceHandler() {
        const rendomIndex = Math.floor(Math.random()*reviews.langth);
        setIndex(rendomIndex);
    }

    return(
        <div>
            <Card review = {reviews[index]}/>

            <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto">
                <button 
                onClick={leftShiftHandler}
                className="cursor-pointer hover:text-violet-500">
                    <FiChevronLeft/>
                </button>

                <button 
                onClick={RightShiftHandler}
                className="cursor-pointer hover:text-violet-500">
                    <FiChevronRight/>
                </button>
            </div>

            <div>
                <button 
                onClick={SurpriceHandler}
                className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">
                    Surprice Me
                </button>
            </div>
        </div>
        
    );
}

export default Testimonial;