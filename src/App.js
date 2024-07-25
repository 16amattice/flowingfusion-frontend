// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Products from './Products';
import Purchases from './Purchases';
import SignIn from './SignIn';
import Register from './Register';
import NavBar from './NavBar';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const PrivateRoute = ({ element, user }) => {
  return user ? element : <Navigate to="/signin" />;
};

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
        <div style={{ marginLeft: 240, padding: '20px' }}>
          <Routes>
            <Route path="/products" element={<PrivateRoute user={user} element={<Products />} />} />
            <Route path="/purchases" element={<PrivateRoute user={user} element={<Purchases />} />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
