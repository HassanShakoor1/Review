import React, { useState } from 'react';

function Emailpass() {
  // State to store email, password, and error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Handle email change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Validate email
  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
      return false;
    }
    setEmailError('');
    return true;
  };

  // Validate password
  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required');
      return false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return false;
    }
    setPasswordError('');
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields before submitting
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      // Proceed with form submission (e.g., submit data, navigate to another page)
      alert('Form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          className='w-full mt-[20px]  bg-[#ededed] h-[58px] border-2 border-[rgb(197, 197, 197)] rounded-[10px] outline-none p-2'
          placeholder='Please enter the Email'
          type="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={validateEmail}
        />
        {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
      </div>
      <div className="mt-1">
        <input
          className='w-full mt-[20px] bg-[#ededed] h-[58px] border-2 border-[rgb(197, 197, 197)] rounded-[10px] outline-none p-2'
          placeholder='Please enter the Password'
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={validatePassword}
        />
        {passwordError && <p className="text-red-500 text-xs">{passwordError}</p>}
      </div>
    </form>
  );
}

export default Emailpass;
