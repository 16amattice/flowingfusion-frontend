import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Products';
import Purchases from './Purchases';
import SignIn from './SignIn';
import Register from './Register';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Profile from './Profile';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const drawerWidth = 240;

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
        <SideBar />
        <main style={{ marginLeft: drawerWidth, padding: '20px', width: '100%', marginTop: '64px' }}>
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} /> {/* Add a Profile route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
