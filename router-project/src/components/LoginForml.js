import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {

    const[formData,setFormData] = useState({
        email : "",password : ""
    })

    const[showPassword,setShowPassword] = useState();

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }

    return(
        <from>
            <label>
                <p>
                    Email Address<sup>*</sup>
                </p>

                <input
                required
                type="text"
                placeholder="enter your Email"
                value={formData.email}
                name="email"
                onChange={changeHandler}
                />

            </label>

            <label>
                <p>
                    Password<sup>*</sup>
                </p>

                <input
                required
                type= {showPassword ? ("text") : ("password")}
                placeholder="enter your Password"
                value={formData.password}
                name="password"
                onChange={changeHandler}
                />
                
                <span onClick={ () => setShowPassword( (prev) => !prev)}>
                    {showPassword ? (<AiOutLineEyeInvisiable/>) : (<AiOutLineEye/>)}
                </span>

                <Link>
                    <p>
                        Forget Password
                    </p>
                </Link>

            </label>
            
            <button>
                Sign in
            </button>

        </from>
    );
}

export default LoginForm;