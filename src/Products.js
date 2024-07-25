// src/Products.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, TextField, List, ListItem, ListItemText } from '@mui/material';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${BASE_URL}/products`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log('API Response:', response.data);
        if (response.data.success) {
          setProducts(response.data.products);
        } else {
          console.error('Unexpected response format:', response.data);
          setProducts([]);
        }
      } catch (error) {
        console.error('There was an error fetching the products!', error);
      }
    };

    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${BASE_URL}/products`, newProduct, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProducts([...products, response.data]);
      setNewProduct({ name: '', description: '', price: '' });
    } catch (error) {
      console.error('There was an error creating the product!', error);
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <List>
        {products.map(product => (
          <ListItem key={product.id}>
            <Card>
              <ListItemText
                primary={product.name}
                secondary={`Description: ${product.description} - Price: $${product.price}`}
              />
            </Card>
          </ListItem>
        ))}
      </List>
      <h2>Create a New Product</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" name="name" value={newProduct.name} onChange={handleChange} required />
        <TextField label="Description" name="description" value={newProduct.description} onChange={handleChange} required />
        <TextField label="Price" name="price" type="number" value={newProduct.price} onChange={handleChange} required />
        <Button type="submit">Create Product</Button>
      </form>
    </div>
  );
};

export default Products;
