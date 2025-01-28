import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import left from "../images/left.png";
import right from "../images/right.png";
import logo from "../images/logo.png";
import Emailpass from '../Component/Emailpass';
import Mainbtn from '../Component/Mainbtn';

function Signin() {
    return (
        <div className=" w-[100vw]">
            <div className="w-full h-screen overflow-hidden flex">
                {/* Left Image */}
                <img className="h-full hidden lg:block flex-none" src={left} alt="left" />

                {/* Sign-in Form */}
                <div className="flex-grow flex flex-col items-center sm:mt-[130px] mt-[100px]">
                    <div className="flex items-center">
                        <img className="w-[50px] h-[50px]" src={logo} alt="logo" />
                        <h1 className="text-green-500 text-2xl font-bold">REVIEW COLLECTOR</h1>
                    </div>
                    <div className="mt-3">
                        <h3 className="text-lg text-[30px] text-center font-bold">Sign in</h3>
                        <p className="mt-2 text-center text-[20px]">Login to your Account</p>

                        <form className="md:w-[35vw] w-[90vw]">
                            <Emailpass />
                        </form>

                        {/* Forgot Password Link */}
                        <div className="w-[90%] m-auto mt-2 items-center flex justify-between">
                            <p></p>
                            <p className="pl-5 text-right">
                                <Link to="/password" className="font-bold underline cursor-pointer text-black-500">
                                    Forgot password?
                                </Link>
                            </p>
                        </div>

                        <Mainbtn text="Sign in" />
                    </div>
                </div>

                {/* Right Image */}
                <img className="h-full hidden lg:block flex-none" src={right} alt="right" />
            </div >
        </div >
    );
}

export default Signin;
