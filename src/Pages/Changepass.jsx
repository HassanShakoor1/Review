import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import left from "../images/left.png";
import right from "../images/right.png";
import logo from "../images/logo.png";
import Emailpass from '../Component/Emailpass'; // Assuming this component is used for the email and password fields
import Mainbtn from '../Component/Mainbtn'; // Assuming this is used for the main button

function Changepass() {
    return (
        <div className=" w-[100vw]">
            <div className="w-full h-screen overflow-hidden flex">
                {/* Left Image */}
                <img className="h-full hidden lg:block flex-none" src={left} alt="left" />

                {/* Change Password Form */}
                <div className="flex-grow flex flex-col items-center sm:mt-[130px] mt-[100px] p-2 sm:p-0">
                    <div className="flex items-center gap-3">
                        <img className="w-[50px] h-[50px]" src={logo} alt="logo" />
                        <h1 className="text-green-500 text-2xl font-bold">REVIEW COLLECTOR</h1>
                    </div>
                    <div className="mt-3">
                        <h3 className="text-lg text-[30px] text-center font-bold">Change Password</h3>
                        <p className="mt-2 text-center text-[20px]">Please enter your new password</p>

                        {/* Emailpass for entering new password */}
                        <div className="md:w-[35vw] w-[90vw]">
                            <Emailpass placeholder="Enter new password" />
                        </div>

                        {/* Link to Sign In */}
                        <div className="w-[90%] m-auto mt-2 items-center flex justify-between">
                            <p></p>
                            <p className="pl-5 text-right">
                                <Link to="/signin" className="font-bold underline text-black-500">
                                    Sign in
                                </Link>
                            </p>
                        </div>

                        {/* Main button */}
                        <Mainbtn text="Change Password" />
                    </div>
                </div>

                {/* Right Image */}
                <img className="h-full hidden lg:block flex-none" src={right} alt="right" />
            </div>
        </div>
    );
}

export default Changepass;
