// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Products';
import Purchases from './Purchases';
import SignIn from './SignIn';
import Register from './Register';
import NavBar from './NavBar';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import Profile from './Profile'; // Assuming you have a Profile component

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        localStorage.setItem('token', user.accessToken);
      } else {
        localStorage.removeItem('token');
      }
    });
    return unsubscribe;
  }, []);

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <NavBar user={user} />
        <div style={{ marginLeft: 240, padding: '20px', width: '100%' }}>
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} /> {/* Add a Profile route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
