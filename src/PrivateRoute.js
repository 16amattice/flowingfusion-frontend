// src/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Create an AuthContext to manage auth state

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { currentUser } = useAuth();
  return currentUser ? <Element {...rest} /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
