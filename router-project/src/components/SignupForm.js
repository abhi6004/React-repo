import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) =>  {

    const[formData,setFormData] = useState({
        firstname : "" , lastname : "" , email : "" , createPassword : "" , confirmPassword : ""
    })

    const[showPassword,setShowPassword] = useState();

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
            <div>
                <button>
                    student
                </button>

                <button>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>

                <div>
                    <label>
                        <p>First Name <sup>*</sup></p>

                        <input
                            required
                            type="text"
                            placeholder="First Name"
                            name="firstname"
                            value={FormData.firstname}
                            onChange={changeHandler}
                        />
                    </label>

                    <label>
                        <p>Last Name <sup>*</sup></p>

                        <input
                            required
                            type="text"
                            placeholder="Last Name"
                            name="lastname"
                            value={FormData.lastname}
                            onChange={changeHandler}
                        />
                    </label>
                </div>
                
                <label>
                    <p>Email Address <sup>*</sup></p>

                    <input
                        required
                        type="text"
                        placeholder="Enter Email Address"
                        name="email"
                        value={FormData.email}
                        onChange={changeHandler} 
                    />
                </label>

                <div>
                    <label>
                        <p>Create Password <sup>*</sup></p>
 
                        <input
                            required
                            type= {showPassword ? ("text") : ("password") }
                            placeholder="Create Password"
                            name="createPassword"
                            value={FormData.createPassword}
                            onChange={changeHandler}
                        />

                        <span onClick={ () => setShowPassword( (prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                        </span>
                    </label>

                    <label>
                        <p>Confirm Password <sup>*</sup></p>

                        <input
                            required
                            type= {showPassword ? ("text") : ("password") }
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={FormData.confirmPassword}
                            onChange={changeHandler}
                        />

                        <span onClick={ () => setShowPassword( (prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                        </span>
                    </label>
                </div>

                <button onClick={submitHandler}>Create Account</button>
                
            </form>
            
        </div>
    );
}

export default SignupForm;