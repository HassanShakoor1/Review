import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Home from './Pages/Home';
import Changepass from './Pages/Changepass';
import MainContainer from './Component/MainContainer';

function App() {
  return (

    <div className=" max-w-full flex justify-center  mx-auto">
      <Router>
        <Routes>
          {/* Route for Sign Up page */}
          <Route path="/" element={<MainContainer ><Signup /></MainContainer>} />

          {/* Route for Sign In page */}
          <Route path="/signin" element={<MainContainer>  <Signin /></MainContainer>} />

          <Route path="/password" element={<MainContainer> <Changepass /></MainContainer>} />

          {/* Optional: Add a route for Home or fallback route */}
          <Route path="/home" element={<MainContainer><Home /></MainContainer>} />

          {/* Optional: Add a "Page Not Found" route */}

        </Routes>
      </Router>
    </div>

  );
}

export default App;
