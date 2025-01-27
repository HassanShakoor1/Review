import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import left from "../images/left.png";
import right from "../images/right.png";
import logo from "../images/logo.png";
import Emailpass from '../Component/Emailpass';
import Mainbtn from '../Component/Mainbtn';

function Signup() {
    const navigate = useNavigate(); // Initialize navigate function
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSignup = (e) => {
        e.preventDefault(); // Prevent default form submission

        if (validateForm()) {
            // Your signup logic here (e.g., API call)

            // After successful signup, navigate to the home page
            navigate("/home");
        }
    };

    return (
        <div className='w-[100vw]  h-[100%]'>
            <div className='flex justify-between '>
                <img className='h-[100vh] hidden lg:block' src={left} alt="left" />

                <div className="flex flex-col items-center  m-auto mt-[130px] gap-3">
                    <div className="flex items-center gap-3">
                        <img className="w-[50px] h-[50px]" src={logo} alt="logo" />
                        <h1 className="text-green-500 text-2xl font-bold">REVIEW COLLECTOR</h1>
                    </div>
                    <div className="mt-3">
                        <h3 className="text-lg text-[30px] text-center font-bold">Sign Up</h3>
                        <p className='mt-2 text-center text-[20px]'>Create an Account to Continue</p>

                        <form onSubmit={handleSignup}>
                            <input
                                className='w-[450px] m-2 bg-[#ededed] mt-[30px] h-[58px] border-2 border-[rgb(197, 197, 197)] rounded-[10px] outline-none p-2'
                                placeholder='Please enter the name'
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                            <Emailpass />



                            <div className=' w-[420px] m-auto mt-2  items-center flex justify-between  '>
                                <p>Already have an Account ?</p>
                                <p className=" pl-5 text-right">
                                    <Link to="/signin" className="font-bold underline cursor-pointer text-black-500">Sign in</Link>
                                </p>
                            </div>
                            <Mainbtn text="Sign Up" />
                        </form>
                    </div>
                </div>

                <img className='h-[100vh] hidden lg:block' src={right} alt="right" />
            </div>
        </div>
    );
}

export default Signup;
