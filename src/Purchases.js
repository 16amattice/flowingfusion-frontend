import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, List, ListItem, ListItemText, Container, Typography, Grid } from '@mui/material';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Purchases = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${BASE_URL}/purchases`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log('API Response:', response.data);
        setPurchases(response.data);
      } catch (error) {
        console.error('There was an error fetching the purchases!', error);
      }
    };

    fetchPurchases();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Purchases</Typography>
      <Grid container spacing={3}>
        {purchases.map(purchase => (
          <Grid item xs={12} md={6} lg={4} key={purchase.id}>
            <Card style={{ padding: '16px' }}>
              <Typography variant="h6">{purchase.productName}</Typography>
              <Typography variant="body2">Amount: {purchase.amount}</Typography>
              <Typography variant="body2">Date: {purchase.date}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Purchases;
