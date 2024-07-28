import {React,useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const defaultTheme = createTheme();

function Login(){
  const navigate = useNavigate();

  
  const [formData,setFormData]=useState(
    {
       email:'',
       password:''
    }
  );

  

  const handleSubmit= async (e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/signin', formData);
      if (response.status === 200) {
        alert("Successfully logged in");
        navigate('/dashboard');
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          alert("Email not registered. Please sign up first.");
        } else if (error.response.status === 401) {
          alert("Incorrect password. Please try again.");
        } else {
          alert(`Error logging in: ${error.response.data}`);
        }
      } else if (error.request) {
        console.error('Error request:', error.request);
        alert('No response from the server. Please try again later.');
      } else {
        console.error('Error message:', error.message);
        alert('Error logging in. Please try again.');
      }
    }
  };

const handleChange=(e)=>{
  const {name,value}=e.target;
  setFormData({
    ...formData,
    [name]:value,
  })
}

{/* <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );


 const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context; */}



  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://cdn.educba.com/academy/wp-content/uploads/2016/02/recruitment-738x442.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form"  onSubmit={handleSubmit} noValidate  sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formData.email}
                autoComplete="email"
                autoFocus
                onChange={handleChange}
                />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                value={formData.password}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link  variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link  style={{cursor:'pointer'}} onClick={() => navigate("/registration")} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
      }
      export default Login;