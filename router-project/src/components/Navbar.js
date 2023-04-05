import React from "react";
import Logo from "../assets/Logo.svg"
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

function Navbar(props) {

    let isloggedin = props.isLoggedin;
    let setIsLoggedin = props.setIsLoggedin;

    return(
        <div className="flex justify-evenly">
            <Link to="/">
                <img src={Logo} alt="Logo" width={160} height={32} loading="lazy"/>
            </Link>

            <nav className="">
                <ul className="flex gap-3">
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

            <div className="flex ml-4 gap-4">
            {!isloggedin &&
                <Link to="login">
                    <button onClick={() => {
                        setIsLoggedin(false);
                        toast.success("Log in success");
                    }}
                    >Login</button>
                </Link>
            }

            {!isloggedin &&
                <Link to="signup">
                    <button>Sign up</button>
                </Link>
            }

            {isloggedin &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedin(false);
                        toast.success("Logout success");
                    }}
                    >Log out</button>
                </Link>
            }

            {isloggedin &&
                <Link to="Dashboard">
                    <button>Dashboard</button>
                </Link>
            }

            </div>
        </div>
    );
}

export default Navbar;