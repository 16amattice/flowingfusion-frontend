import React, { useState } from 'react';
import { auth, googleProvider } from './firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Button, TextField, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken();
      localStorage.setItem('idToken', idToken);
      navigate('/products');
    } catch (error) {
      console.error('Error signing in with email and password', error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const idToken = await userCredential.user.getIdToken();
      localStorage.setItem('idToken', idToken);
      navigate('/products');
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Sign In</Typography>
      <form onSubmit={handleSignIn}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">Sign In</Button>
      </form>
      <Button onClick={handleGoogleSignIn} variant="contained" color="secondary" style={{ marginTop: '16px' }}>
        Sign In with Google
      </Button>
    </Container>
  );
};

export default SignIn;
