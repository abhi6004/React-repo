import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";

function SignupForm() {

    const[formData,setFormData] = useState({
        firstname : "" , lastname : "" , email : "" , createpassword : "" , confirmpassword : ""
    })

    const[showPassword,setShowPassword] = useState();
    
    function changeHandler(event) {
        setFormData( (prevData) => (
            {
            ...prevData,
            [event.target.name] : event.target.value
            }
         ) )
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

            <form>

                <div>
                    <label>
                        <p>First Name <sup>*</sup></p>

                        <input
                            required
                            type="text"
                            placeholder="First Name"
                            name="firstname"
                            value={FormData.firstname}
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
                            name="createpassword"
                            value={FormData.createpassword}
                            onChange={changeHandler}
                        />

                        <span onClick={ () => setShowPassword( (prev) => !prev)}>
                            {showPassword ? (<AiOutLineEyeInvisiable/>) : (<AiOutLineEye/>)}
                        </span>
                    </label>

                    <label>
                        <p>Confirm Password <sup>*</sup></p>

                        <input
                            required
                            type= {showPassword ? ("text") : ("password") }
                            placeholder="Confirm Password"
                            name="confirmpassword"
                            value={FormData.confirmpassword}
                            onChange={changeHandler}
                        />

                        <span onClick={ () => setShowPassword( (prev) => !prev)}>
                            {showPassword ? (<AiOutLineEyeInvisiable/>) : (<AiOutLineEye/>)}
                        </span>
                    </label>
                </div>
                
            </form>
            
        </div>
    );
}

export default SignupForm;