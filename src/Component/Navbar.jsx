import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi'; // Hamburger menu icon
import { Link } from 'react-router-dom';
import { Drawer, IconButton } from '@mui/material'; // MUI components
import logo from "../images/logo.png";
import profile from "../images/profile.svg";
import analytics from "../images/analytics.svg";
import dashboard from "../images/dashboard.svg";
import setting from "../images/setting.svg";
import hamb from "../images/hamb.png";

function Navbar() {
    const [active, setActive] = useState('profile'); // State for active link
    const [drawerOpen, setDrawerOpen] = useState(false); // State for drawer visibility

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <div className="w-full bg-white shadow-md">
            <div className="flex items-center justify-between max-w-[90%] m-auto h-[100px]">
                {/* Left Section: Hamburger + Logo */}
                <div className="flex items-center gap-4">
                    <IconButton onClick={handleDrawerToggle} className="lg:hidden">
                        <HiMenuAlt3 className="text-4xl text-[#1ACB5B] cursor-pointer" />
                    </IconButton>
                    <div className="flex items-center gap-2">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-10 h-10"
                        />
                        <h1 className="text-2xl font-bold text-[#36D06E]">Review Collector</h1>
                    </div>
                </div>

                {/* Right Section: Links (Hidden on small screens) */}
                <div className="hidden lg:flex items-center gap-20">
                    <Link
                        to="/profile"
                        onClick={() => setActive('profile')}
                        className={`flex font-[500] items-center rounded-[12px] gap-2 p-3 text-xl ${active === 'profile'
                            ? 'bg-[#E1FFEC] bg-opacity-50 text-green-500'
                            : 'text-[#989898]'
                            }`}
                    >
                        <img
                            src={profile}
                            className={`w-5 h-5 ${active === 'profile' ? 'text-green-500' : 'text-gray-500'}`}
                        />
                        Profile
                    </Link>
                    <Link
                        to="/survey"
                        onClick={() => setActive('survey')}
                        className={`flex items-center gap-2 p-2 rounded-md text-xl ${active === 'survey'
                            ? 'bg-green-500 bg-opacity-50 text-green-500'
                            : 'text-[#989898]'
                            }`}
                    >
                        <img
                            src={dashboard}
                            className={`w-7 h-7 ${active === 'survey' ? 'text-green-500' : 'text-[#989898]'}`}
                        />
                        Survey
                    </Link>
                    <Link
                        to="/dashboard"
                        onClick={() => setActive('dashboard')}
                        className={`flex items-center gap-2 p-2 rounded-md text-xl ${active === 'dashboard'
                            ? 'bg-green-500 bg-opacity-50 text-green-500'
                            : 'text-[#989898]'
                            }`}
                    >
                        <img
                            src={analytics}
                            className={`w-9 h-9 ${active === 'dashboard' ? 'text-green-500' : 'text-gray-500'}`}
                        />
                        Dashboard
                    </Link>
                    <Link
                        to="/settings"
                        onClick={() => setActive('settings')}
                        className={`flex items-center gap-2 p-2 rounded-md text-xl ${active === 'settings'
                            ? 'bg-green-500 bg-opacity-50 text-green-500'
                            : 'text-[#989898]'
                            }`}
                    >
                        <img
                            src={setting}
                            className={`w-6 h-6 ${active === 'settings' ? 'text-green-500' : 'text-gray-500'}`}
                        />
                        Settings
                    </Link>
                </div>
            </div>

            {/* Drawer for smaller screens */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
            >
                <div className="w-64 flex flex-col gap-10 p-4 bg-white">
                    <h1 className="text-2xl font-bold text-[#36D06E] mb-6 mt-4">Review Collector</h1>
                    <Link
                        to="/profile"
                        onClick={() => { setActive('profile'); handleDrawerToggle(); }}
                        className={`flex font-[500] items-center rounded-[12px] gap-2 p-3 text-xl ${active === 'profile'
                            ? 'bg-[#E1FFEC] bg-opacity-50 text-green-500'
                            : 'text-[#989898]'
                            }`}
                    >
                        <img
                            src={profile}
                            className={`w-5 h-5 ${active === 'profile' ? 'text-green-500' : 'text-gray-500'}`}
                        />
                        Profile
                    </Link>
                    <Link
                        to="/survey"
                        onClick={() => { setActive('survey'); handleDrawerToggle(); }}
                        className={`flex items-center gap-2 p-2 rounded-md text-xl ${active === 'survey'
                            ? 'bg-green-500 bg-opacity-50 text-green-500'
                            : 'text-[#989898]'
                            }`}
                    >
                        <img
                            src={dashboard}
                            className={`w-7 h-7 ${active === 'survey' ? 'text-green-500' : 'text-[#989898]'}`}
                        />
                        Survey
                    </Link>
                    <Link
                        to="/dashboard"
                        onClick={() => { setActive('dashboard'); handleDrawerToggle(); }}
                        className={`flex items-center gap-2 p-2 rounded-md text-xl ${active === 'dashboard'
                            ? 'bg-green-500 bg-opacity-50 text-green-500'
                            : 'text-[#989898]'
                            }`}
                    >
                        <img
                            src={analytics}
                            className={`w-9 h-9 ${active === 'dashboard' ? 'text-green-500' : 'text-gray-500'}`}
                        />
                        Dashboard
                    </Link>
                    <Link
                        to="/settings"
                        onClick={() => { setActive('settings'); handleDrawerToggle(); }}
                        className={`flex items-center gap-2 p-2 rounded-md text-xl ${active === 'settings'
                            ? 'bg-green-500 bg-opacity-50 text-green-500'
                            : 'text-[#989898]'
                            }`}
                    >
                        <img
                            src={setting}
                            className={`w-6 h-6 ${active === 'settings' ? 'text-green-500' : 'text-gray-500'}`}
                        />
                        Settings
                    </Link>
                </div>
            </Drawer>
        </div>
    );
}

export default Navbar;
