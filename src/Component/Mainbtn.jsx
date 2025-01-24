import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Mainbtn({ text, email, password }) {
    const navigate = useNavigate(); // Initialize navigate function

    const handleClick = () => {
        // Check if email and password are valid
        if (email && password) {
            // Navigate to the home page when the button is clicked
            navigate("/home");
        } else {
            alert('Please fill in both email and password');
        }
    };

    return (
        <div>
            <div className='w-[400px] h-[55px]'>
                <button
                    className='w-[450px] mt-[40px] bg-[#01c849] text-xl text-white h-[55px] rounded-[10px] outline-none p-2'
                    onClick={handleClick} // Add onClick event handler
                >
                    {text}
                </button>
            </div>
        </div>
    );
}

export default Mainbtn;
