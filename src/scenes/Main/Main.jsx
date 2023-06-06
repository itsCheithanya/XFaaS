import React from 'react'
import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
import { useState } from 'react'
import { TextField, Button, Container } from '@mui/material';
import UserGraphs from '../graphs/Usergraphs';

const features = ['BCLOT', 'A/G RAT', 'TBIL', 'TREP', 'GGT', 'SGOT', 'SGPT', 'ALKPO4'];

const Main = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    
    
    
  };
  

  return (
    <Container maxWidth="sm">
      
      <form onSubmit={handleSubmit} action='/submit-form'>
        {features.map((feature) => (
          <TextField
            key={feature}
            name={feature}
            label={feature}
            value={formData[feature] || ''}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        ))}
        <Button type="submit" variant='contained' color="primary" >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Main;
