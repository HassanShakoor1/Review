import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Home from './Pages/Home';
import Changepass from './Pages/Changepass';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Sign Up page */}
        <Route path="/signup" element={<Signup />} />

        {/* Route for Sign In page */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/password" element={<Changepass />} />

        {/* Optional: Add a route for Home or fallback route */}
        <Route path="/" element={<Home />} />

        {/* Optional: Add a "Page Not Found" route */}

      </Routes>
    </Router>
  );
}

export default App;
