import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../Dash.css';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// const defaultTheme=createTheme();
const theme = createTheme({
  palette: {
    background: {
      // backgorundImage: "url('https://th.bing.com/th/id/OIP.ecgDNsouKYhbLb8nR3uLmwHaEK?rs=1&pid=ImgDetMain')",
      backgroundSize: 'cover',
      backgroundColor:"black",
    },
  },
});


function Registration(){
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName:'',
    email:'',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name+" "+value);
    setFormData({
     ...formData,
      [name]: value,
    });
    updateErrorState(name, value);
  };

  const updateErrorState = (name, value) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value ? '' : `${name} is required`,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

    try {
     
      await axios.post('http://localhost:8080/registration', formData);
      setFormData({
        firstName: '',
        lastName: '',
        email:'',
        password: ''
      });

      alert('User registered successfully!');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Error registering user. Please try again.');
     
    }
  };







//required
const [errors, setErrors] = useState({});
const validateForm = () => {
  const validationSchema = {
    firstName: 'FirstName is required',
    lastName: 'LastName is required',
    email: 'Email is required',
    password: 'Password is required',
  };
  const validationErrors = {};
  Object.entries(validationSchema).forEach(([field, errorMessage]) => {
    if (!formData[field]) {
      validationErrors[field] = errorMessage;
    }
  });
  return validationErrors;
};



  return(
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs" height="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          
        }}
      >
        
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                value={formData.firstName}
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleInputChange}
                error={!!errors.firstName} 
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                autoComplete="family-name"
                onChange={handleInputChange}
                error={!!errors.lastName} 
                helperText={errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formData.email}
                autoComplete="email"
                onChange={handleInputChange}
                error={!!errors.email} 
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                value={formData.password}
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={handleInputChange}
                error={!!errors.password} 
                helperText={errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="By creating an account,you agree to our terms and privacy policy"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link style={{cursor:'pointer'}} onClick={() => navigate("/")} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

    </Container>
  </ThemeProvider>
  )
      }
      export default Registration;