import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import left from "../images/left.png";
import right from "../images/right.png";
import logo from "../images/logo.png";
import Emailpass from '../Component/Emailpass';
import Mainbtn from '../Component/Mainbtn';

function Signin() {
    return (
        <div className='w-[100%] h-[100%]'>
            <div className='flex justify-between'>
                <img className='hidden lg:block' src={left} alt="left" />

                <div className="flex flex-col items-center p-2 sm:p-0 m-auto mt-[130px] gap-3">
                    <div className="flex items-center gap-3">
                        <img className="w-[50px] h-[50px]" src={logo} alt="logo" />
                        <h1 className="text-green-500 text-2xl font-bold">REVIEW COLLECTOR</h1>
                    </div>
                    <div className="mt-3">
                        <h3 className="text-lg text-[30px] text-center font-bold">Sign in</h3>
                        <p className='mt-2 text-center text-[20px]'>Login to your Account</p>

                        <Emailpass />



                        {/* Link to Sign Up page */}
                        <div className=' w-[450px] items-center flex justify-between '>
                            <p></p>
                            <p className=" pl-5 text-right">
                                <Link to="/password" className="font-bold underline text-black-500">forgot password?</Link>
                            </p>
                        </div>
                        <Mainbtn text="Sign in" />

                    </div>
                </div>

                <img className='hidden lg:block' src={right} alt="right" />
            </div>
        </div>
    );
}

export default Signin;
