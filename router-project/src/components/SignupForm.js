import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) =>  {

    const[formData,setFormData] = useState({
        firstname : "" , lastname : "" , email : "" , createPassword : "" , confirmPassword : ""
    })

    const[showPassword,setShowPassword] = useState();
    const[accountType,setAccoutType] = useState("student")

    const navigate = useNavigate();
    
    function changeHandler(event) {
        setFormData( (prevData) => (
            {
            ...prevData,
            [event.target.name] : event.target.value
            }
         ) )
    }

    function submitHandler(event) {
        event.preventDefault();
        if(formData.createPassword != formData.confirmPassword) {
            toast.error("password not match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Sign Up");
        navigate("/dashbord");
    }

    return(
        <div>

            {/* student and Instructor tab */}
            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button
                className={`${accountType === "student"
                ?
                "bg-richblack-900 text-richblack-5"
                : "bg-transparent text-richblack-200"
                } py-2 px-5 rounded-full transition-all duration-200`}
                
                onClick={() => setAccoutType("student")}>
                    Student
                </button>

                <button 
                className={`${accountType === "Instructor"
                ?
                "bg-richblack-900 text-richblack-5"
                : "bg-transparent text-richblack-200"
                } py-2 px-5 rounded-full transition-all duration-200`}
                onClick={() => setAccoutType("Instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>

                <div className="flex justify-between">
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>

                        <input
                            required
                            type="text"
                            placeholder="First Name"
                            name="firstname"
                            value={FormData.firstname}
                            onChange={changeHandler}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>

                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup></p>

                        <input
                            required
                            type="text"
                            placeholder="Last Name"
                            name="lastname"
                            value={FormData.lastname}
                            onChange={changeHandler}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                </div>
                
                <label className="w-full">
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>

                    <input
                        required
                        type="text"
                        placeholder="Enter Email Address"
                        name="email"
                        value={FormData.email}
                        onChange={changeHandler} 
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                </label>

                <div className="flex justify-between">
                    <label className="relative">
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password <sup className='text-pink-200'>*</sup></p>
 
                        <input
                            required
                            type= {showPassword ? ("text") : ("password") }
                            placeholder="Create Password"
                            name="createPassword"
                            value={FormData.createPassword}
                            onChange={changeHandler}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />

                        <span className='absolute right-3 top-[38px] cursor-pointer'  onClick={ () => setShowPassword( (prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                    </label>

                    <label className="relative">
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password <sup className='text-pink-200'>*</sup></p>

                        <input
                            required
                            type= {showPassword ? ("text") : ("password") }
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={FormData.confirmPassword}
                            onChange={changeHandler}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />

                        <span className='absolute right-3 top-[38px] cursor-pointer'  onClick={ () => setShowPassword( (prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                    </label>
                </div>

                <button className='bg-yellow-50 w-full rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-[6px]' onClick={submitHandler}>Create Account</button>
                
            </form>
            
        </div>
    );
}
                                                                                                                                                          
export default SignupForm;