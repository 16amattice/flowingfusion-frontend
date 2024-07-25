// src/Profile.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Profile = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Typography variant="body1">
        {/* Add profile details here */}
        This is the profile page.
      </Typography>
    </Container>
  );
};

export default Profile;
