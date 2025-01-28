import React, { useState, useEffect } from 'react';
import { FaCamera } from 'react-icons/fa'; // Importing camera icon
import { FaCog } from 'react-icons/fa'; // Importing settings icon
import { FaGoogle } from "react-icons/fa";
import { FaEye, FaShareAlt, FaEdit, FaRegStickyNote, FaQrcode } from 'react-icons/fa'; // Importing required icons
import Svg from './Svg'
import { Box, FormControlLabel, Switch, Slide } from "@mui/material";
;
import Eye from "../images/Eye.png";
import share from "../images/share.png";
import edit from "../images/edit.png";
import setting from "../images/setting.svg";
function Profilesection() {

  const [coverImage, setCoverImage] = useState("https://via.placeholder.com/400x150");
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/100");
  const [name, setName] = useState("Hubble 42 Inc");
  const [email, setEmail] = useState("johndoe@example.com");
  const [contact, setContact] = useState("03114453396");

  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const mydata = localStorage.getItem("profileData");
    if (mydata) {
      const { coverImage, profileImage, name, email, contact } = JSON.parse(mydata);
      setCoverImage(coverImage);
      setProfileImage(profileImage);
      setName(name);
      setEmail(email);
      setContact(contact);
    }
    console.log(mydata)
  }, []);


  const handleChange = () => setChecked(!checked);
  // Function to save data to localStorage
  const saveDataToLocalStorage = () => {
    const profileData = {
      coverImage,
      profileImage,
      name,
      email,
      contact
    };
    localStorage.setItem("profileData", JSON.stringify(profileData));
    alert("Profile data saved to local storage!");
  };

  const handleButtonClick = () => {
    // Toggling the checked state when the button is clicked
    setChecked((prevChecked) => !prevChecked);
  };



  // Handle Image Change
  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };


  const [isOn1, setIsOn1] = useState(false);
  const [isOn2, setIsOn2] = useState(false);
  const [isOn3, setIsOn3] = useState(false);

  // Toggle the first button
  const handleToggle1 = () => setIsOn1(!isOn1);

  // Toggle the second button
  const handleToggle2 = () => setIsOn2(!isOn2);

  // Toggle the third button
  const handleToggle3 = () => setIsOn3(!isOn3);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define the inline styles for the profile image
  const profileImageStyle = windowWidth < 600
    ? { left: '6%', top: '75%' }
    : { top: '105%', left: '12%', transform: 'translate(-50%, -50%)' };
  return (
    <div className="w-full sm:py-8 py-0">
      <div>
        {/* Container for Both Left and Right Sections */}
        <div className="flex flex-wrap justify-between w-[90%] m-auto lg:gap-0 sm:gap-10 sm:mt-[30px] ">

          <div className="lg:w-[48%] w-full bg-white shadow-md rounded-[90px] relative">
            <div className="relative sm:h-[250px] h-[200px] bg-gray-100 rounded-[20px]">
              <img
                src={coverImage}
                alt="Cover"
                className="w-full border-2 border-[#D9D9D9] h-full object-cover rounded-[22px]"
              />
              <img
                src={profileImage}
                alt="Profile"
                className="absolute bg-gray-100 border-[5px] border-white w-[120px] h-[120px] object-cover rounded-[25px]"
                style={profileImageStyle}
              />
            </div>

            <div className="mt-16 pt-3 ml-[30px] sm:ml-[15px]">
              <h1 className="text-xl text-[#000000] font-bold">{name}</h1>
              <p className=" text-[#8D8D8D] font-[300] pt-3">{contact}</p>
              <p className="text-[#8D8D8D] font-[300] pt-2">{email}</p>
            </div>
            <button
              onClick={handleButtonClick}
              checked={checked} onChange={handleChange}
              className="absolute sm:right-[40px] right-[10px] sm:top-[295px] top-[220px] bg-gray-100 text-[grey] w-[170px] h-[50px] rounded-[13px] border border-[#D7D7D7] shadow flex items-center justify-center gap-2"
            >
              <span className="text-4xl font-[100] text-[#B9B9B9]">+</span>
              <span className="text-md pt-1 font-[300] text-[#B9B9B9]"> Add Profile</span>
            </button>
            <button
              className="bg-gray-100 text-[grey] mt-[22px] w-[100%] h-[60px] border border-gray-200 rounded-[11px] shadow flex items-center justify-center gap-2"
            >
              <img src={setting} className="text-2xl font-[100]" />
              <span className="text-xl text-[#B9B9B9] font-[300]">Manage</span>
              <span className="text-xl text-[#B9B9B9] font-[300]">Profile</span>
            </button>
          </div>



          {/* Right Section */}
          <div className="custom-margin-top lg:w-[48%] w-full bg-white shadow-md rounded-md">

            {/* Three Boxes in a Row */}
            <div className="flex justify-between gap-4">
              {/* First Box - Preview */}
              <div className=" w-[28%] sm:w-[32%] sm:h-[160px] h-[120px]  bg-gray-100 rounded-[14px] border border-[#D7D7D7] flex flex-col items-center justify-center p-4 shadow">
                <span className="text-[#000000] font-[400] sm:text-xl text-[15px]">Preview</span>
                <img src={Eye} className="sm:w-[60px] w-[40px]  sm:m-5 m-2" />



              </div>

              {/* Second Box - Share */}
              <div className="w-[28%] sm:w-[32%] sm:h-[160px] h-[120px]  bg-gray-100 rounded-[14px] border border-[#D7D7D7] flex flex-col items-center justify-center p-4 shadow">
                <span className="text-[#000000] font-[400] sm:text-xl text-[15px]">Share</span>
                <img src={share} className="sm:w-[70px] w-[40px] sm:m-5 m-2" />
              </div>

              {/* Third Box - Edit */}
              <div className="w-[28%] sm:w-[32%] sm:h-[160px] h-[120px]  bg-gray-100 rounded-[14px] border border-[#D7D7D7] flex flex-col items-center justify-center p-4 shadow">

                <span className="text-[#000000] font-[400] sm:text-xl text-[15px]">Edit</span>
                <img src={edit} className="sm:w-[70px] w-[40px] sm:m-5 m-2" />
              </div>
            </div>


            <div className="mt-[40px] flex flex-col justify-center bg-[#faf7f7] border border-[#a0a0a0] rounded-[25px] space-y-5">
              {/* Direct Toggle */}
              <div className="flex items-center justify-between w-full p-5">
                <div className="w-[30px] flex h-[30px]">
                  <Svg />
                </div>
                <div className="flex-1 ml-[50px] text-black font-[300] text-xl">Direct</div>
                <div
                  className={`w-[35px] h-[35px] bg-white border ${isOn1 ? 'border-[#16A313]' : 'border-[#737873]'} rounded-full flex items-center justify-center cursor-pointer`}
                  onClick={handleToggle1}
                >
                  <div className={`w-[20px] h-[20px] rounded-full ${isOn1 ? 'bg-[#5AF457]' : 'bg-[#BBBCBB]'}`} />
                </div>
              </div>

              <hr className="w-full border-gray-300 m-0" />

              {/* Enable Survey Toggle */}
              <div className="flex items-center justify-between w-full p-4">
                <Svg />
                <div className="flex-1 ml-[50px] text-black font-[300] text-xl">Enable Survey</div>
                <div
                  className={`w-[35px] h-[35px] bg-white border ${isOn2 ? 'border-[#16A313]' : 'border-[#737873]'} rounded-full flex items-center justify-center cursor-pointer`}
                  onClick={handleToggle2}
                >
                  <div className={`w-[20px] h-[20px] rounded-full ${isOn2 ? 'bg-[#5AF457]' : 'bg-[#BBBCBB]'}`} />
                </div>
              </div>

              <hr className="w-full border-gray-300 m-0" />

              {/* Turn Review Link Off Toggle */}
              <div className="flex items-center justify-between w-full p-4">
                <Svg />
                <div className="flex-1 ml-[50px] text-black font-[300] text-xl">Turn Review Link off</div>
                <div
                  className={`w-[35px] h-[35px] bg-white border ${isOn3 ? 'border-[#16A313]' : 'border-[#737873]'} rounded-full flex items-center justify-center cursor-pointer`}
                  onClick={handleToggle3}
                >
                  <div className={`w-[20px] h-[20px] rounded-full ${isOn3 ? 'bg-[#5AF457]' : 'bg-[#BBBCBB]'}`} />
                </div>
              </div>
            </div>
          </div>

        </div>





      </div>


      <Box sx={{ position: "relative", zIndex: 1 }}>
        {/* Slider Content */}
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          <div className="fixed inset-0 bg-[transparent] flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-md w-full h-full max-w-[1440px] mx-auto overflow-auto relative">
              {/* Close Button */}
              <button
                onClick={() => setChecked(false)}
                className="absolute top-4 right-4 text-3xl text-gray-700 hover:text-gray-900"
              >
                &times;
              </button>

              <h2 className="text-2xl font-bold text-gray-700 mb-6">Edit Profile</h2>

              {/* Cover Image Selection */}
              <div className="mb-6">
                <div className="relative sm:w-[60%] w-[90%] h-[300px] rounded-[30px] m-auto  mb-4">
                  <img
                    src={coverImage}
                    alt="Cover Preview"
                    className="w-[100%] m-auto h-full object-cover rounded-[30px] mb-2"
                  />
                  {coverImage === "https://via.placeholder.com/400x150" && (
                    <label
                      htmlFor="coverImage"
                      className="absolute inset-0 flex justify-center rounded-[30px] items-center cursor-pointer bg-black bg-opacity-50"
                    >
                      <FaCamera className="text-white text-4xl" />
                      <input
                        type="file"
                        id="coverImage"
                        onChange={(e) => handleImageChange(e, setCoverImage)}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </label>
                  )}
                  {coverImage !== "https://via.placeholder.com/400x150" && (
                    <button
                      onClick={() => setCoverImage("https://via.placeholder.com/400x150")}
                      className="absolute w-[20px] flex items-center justify-center h-[20px] top-2 right-2 bg-black text-white rounded-full p-1"
                    >
                      &times;
                    </button>
                  )}
                </div>
              </div>

              {/* Profile Image Selection */}
              <div>
                <div className="relative w-[160px] sm:h-[18vh] h-[17vh] sm:top-[-100px] top-[0px] rounded-[25px] m-auto">
                  <img
                    src={profileImage}
                    alt="Profile Preview"
                    className="w-full h-full object-cover rounded-[25px] mb-2"
                  />
                  {profileImage === "https://via.placeholder.com/100" && (
                    <label
                      htmlFor="profileImage"
                      className="absolute inset-0 flex justify-center items-center rounded-[25px] cursor-pointer bg-black bg-opacity-50"
                    >
                      <FaCamera className="text-white text-4xl" />
                      <input
                        type="file"
                        id="profileImage"
                        onChange={(e) => handleImageChange(e, setProfileImage)}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </label>
                  )}
                  {profileImage !== "https://via.placeholder.com/100" && (
                    <button
                      onClick={() => setProfileImage("https://via.placeholder.com/100")}
                      className="absolute w-[20px] flex items-center justify-center h-[20px] top-2 right-2 bg-black text-white rounded-full p-1"
                    >
                      &times;
                    </button>
                  )}
                </div>
              </div>

              {/* User Data */}
              <div>
                <label htmlFor="name" className="block text-gray-700 text-lg">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full p-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 text-lg">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full p-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="contact" className="block text-gray-700 text-lg">Contact</label>
                <input
                  type="text"
                  id="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="mt-2 w-full p-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Save Button */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={saveDataToLocalStorage}
                  className="bg-green-500 text-white p-4 rounded-md text-lg hover:bg-green-600 transition duration-300"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </Slide>
      </Box>




    </div>
  );
}

export default Profilesection;
