import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import left from "../images/left.png";
import right from "../images/right.png";
import logo from "../images/logo.png";
import Emailpass from '../Component/Emailpass'; // Assuming this component is used for the email and password fields
import Mainbtn from '../Component/Mainbtn'; // Assuming this is used for the main button

function Changepass() {
    return (
        <div className='w-[100%] h-[100%]'>
            <div className='flex sm:justify-between'>
                <img className='hidden lg:block' src={left} alt="left" />

                <div className="flex flex-col items-center m-auto p-2 sm:p-0 mt-[130px] gap-3">
                    <div className="flex items-center gap-3">
                        <img className="w-[50px] h-[50px]" src={logo} alt="logo" />
                        <h1 className="text-green-500 text-2xl font-bold">REVIEW COLLECTOR</h1>
                    </div>
                    <div className="mt-3">
                        <h3 className="text-lg text-[30px] text-center font-bold">Change Password</h3>
                        <p className='mt-2 text-center text-[20px]'>Please enter your new password</p>

                        {/* Assuming Emailpass is used for the password fields */}
                        <Emailpass placeholder="Enter new password" />



                        {/* Main button */}


                        <div className=' w-[430px] items-center flex justify-between '>
                            <p></p>
                            <p className=" pl-5 text-right">
                                <Link to="/signin" className="font-bold underline text-black-500">Sign in</Link>
                            </p>
                        </div>
                        <Mainbtn text="Change Password" />
                    </div>
                </div>

                <img className='hidden lg:block' src={right} alt="right" />
            </div>
        </div>
    );
}

export default Changepass;
