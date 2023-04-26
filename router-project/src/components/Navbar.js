import React from "react";
import Logo from "../assets/Logo.svg"
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

function Navbar(props) {

    let isloggedin = props.isLoggedin;
    let setIsLoggedin = props.setIsLoggedin;

    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
            <Link to="/">
                <img src={Logo} alt="Logo" width={160} height={32} loading="lazy"/>
            </Link>

            <nav className="">
                <ul className="text-white flex gap-x-6">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/">About</Link>
                    </li>

                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Button login-signup-logout-Dashbord */}

            <div className="flex items -center gap-x-4">
            {!isloggedin &&
                <Link to="login">
                    <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border-richblack-700" onClick={() => {
                        setIsLoggedin(false);
                        // toast.success("Log in success");
                    }}
                    >Login</button>
                </Link>
            }

            {!isloggedin &&
                <Link to="signup">
                    <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border-richblack-700">Sign up</button>
                </Link>
            }

            {isloggedin &&
                <Link to="/">
                    <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border-richblack-700" onClick={() => {
                        setIsLoggedin(false);
                        toast.success("Logout success");
                    }}
                    >Log out</button>
                </Link>
            }

            {isloggedin &&
                <Link to="Dashboard">
                    <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border-richblack-700">Dashboard</button>
                </Link>
            }

            </div>
        </div>
    );
}

export default Navbar;