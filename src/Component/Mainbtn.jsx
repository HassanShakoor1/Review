import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Mainbtn({ text, email, password }) {
  const navigate = useNavigate(); // Initialize navigate function

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div>
      <div className='w-full h-[55px]'>
        <button
          className='w-full  mt-[40px] bg-[#01c849] text-xl text-white h-[55px] rounded-[10px] outline-none p-2'
          onClick={handleClick} // Add onClick event handler
        >
          {text}
        </button>
      </div>
    </div>
  );
}

export default Mainbtn;
