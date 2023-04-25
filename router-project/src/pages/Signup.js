import React from "react";
import signupImg from "../assets/signup.png"
import Template from "../components/Template";

function Signup({setIsLoggedIn}) {
    return(
        <Template
            title="Welcome Back"
            desc1="Build skills for today, tomorrow, and beyond."
            desc2="Education to future-proof your career."
            image={signupImg}
            formtype="signup"
            setIsLoggedIn={setIsLoggedIn}
        />
    );
}

export default Signup;