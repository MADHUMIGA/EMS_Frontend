import React from 'react'
import {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios';

//components
import Sidebar from '../../NewCom/Sidebar';
import Navbar from '../../NewCom/Navbar';
import '../../Dash.css';

//mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid  from '@mui/material/Grid';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
// import Stack from '@mui/material/Stack';
// import Divider from '@mui/material/Divider';

import Swal from 'sweetalert2';
import { Button, CardActions, FormControl, InputLabel, Paper, Select, Typography } from '@mui/material';
import Department from './Departments';



// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );


export default function Addemp() {

  const navigate=useNavigate();


  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    empId: '',
  empName: '',
  dept: '', 
  dob: '',
  gender: '',
  gmail: '',
  joinDate: '',
  phno: '',
  salary: '',
  });
  const [errors, setErrors] = useState({});
  

  
const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:8080/admin/emplist');
        setData(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}; 


// //To update input
// const handleFormChange = (e) => {

//   setFormData({ ...formData, [e.target.name]: e.target.value });
  
//   //dynamically updates the errors state
//   setErrors((prevErrors) => ({
//     ...prevErrors,
//     [e.target.name]: e.target.value ? '' : `${e.target.name} is required`,
//   }));

// };






// //Invokes on adding user
// const createUser = async()=>{
  
 
//   const validationSchema = {
//     empId: 'Employee ID is required',
//     empName: 'Name is required',
//     dept: 'Department is required',
//     dob: 'Date of Birth is required',
//     gender: 'Gender is required',
//     gmail: 'Email is required',
//     joinDate: 'Join Date is required',
//     phno: 'Phone Number is required',
//     salary: 'Salary is required',
   
//   };


//   const validationErrors = {};

//   //Validate form fields
//   Object.entries(validationSchema).forEach(([field, errorMessage]) => {
//     if (!formData[field]) {
//       validationErrors[field] = errorMessage;
//     }
//   });

//   //If there are validation errors, update the state and return
//   if (Object.keys(validationErrors).length > 0) {
//     setErrors(validationErrors);
//     return;
//   }
   
//     try {
//       await axios.post('http://localhost:8080/addemp', formData);
//       fetchData();
//       setFormData({});
//   } catch (error) {
//       console.error('Error creating data:', error);
//   }
//   fetchData();
//     Swal.fire(
//       'Success!',
//       'Details has been added!',
//       'success'
//     )
//   };






const handleFormChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
  updateErrorState(name, value);
};

const updateErrorState = (name, value) => {
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: value ? '' : `${name} is required`,
  }));
};

const createUser = async () => {
  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }
  
  try {
    await axios.post('http://localhost:8080/admin/addemp', formData);
    fetchData();
    setFormData({});
    Swal.fire(
      'Success!',
      'Details have been added!',
      'success'
    );
  } catch (error) {
    console.error('Error creating data:', error);
  }
};

const validateForm = () => {
  const validationSchema = {
    empId: 'Employee ID is required',
    empName: 'Name is required',
    dept: 'Department is required',
    dob: 'Date of Birth is required',
    gender: 'Gender is required',
    gmail: 'Email is required',
    joinDate: 'Join Date is required',
    phno: 'Phone Number is required',
    salary: 'Salary is required',
  };

  const validationErrors = {};
  Object.entries(validationSchema).forEach(([field, errorMessage]) => {
    if (!formData[field]) {
      validationErrors[field] = errorMessage;
    }
  });
  return validationErrors;
};


  //dropdown options
  const genders = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];
  const departments = [
    { value: 'Engineering', label: 'Engineering' },
    { value: 'IT', label: 'IT' },
    { value: 'Human Resource', label: 'Human Resource' },
    { value: 'Sales and Marketing', label: 'Sales and Marketing' },
    { value: 'Finance and Accounting', label: 'Finance and Accounting' },
    { value: 'Customer Support', label: 'Customer Support' },
  ];
  
  

  return (
    <>
    <div className='dashbg'> 
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3}}>
        <Typography variant="h7" color={"grey"}>ADD EMPLOYEE</Typography>
         
            <Grid justifyContent="center" style={{ padding: 20}}>
      <Grid item >
        <Paper>
        <Card>
          <CardContent>
          <FormControl fullWidth variant="outlined">
            <Grid container spacing={3} >
              <Grid item xs={12} sm={6} >
                <TextField 
                fullWidth label="Employee ID" 
                variant="outlined"  
                autoFocus
                name="empId" value={formData.empId || ""} onChange={handleFormChange}
                error={!!errors.empId} 
                helperText={errors.empId}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                fullWidth label="Name"
                variant="outlined" 
                name="empName" value={formData.name} onChange={handleFormChange}
                error={!!errors.empName} 
                helperText={errors.empName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth label="Department" variant="outlined"
                  name="dept" value={formData.dept}  onChange={handleFormChange}
                  error={!!errors.dept} 
                  helperText={errors.dept} >

                    {departments.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}

                  </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  type="date"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  name="dob" value={formData.dob}  onChange={handleFormChange}
                  error={!!errors.dob} 
                  helperText={errors.dob}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  label="Gender"
                  variant="outlined"
                  name="gender" value={formData.gender}  onChange={handleFormChange}
                  error={ !!errors.gender} 
                  helperText={ errors.gender}
                >

                  {genders.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}

                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                fullWidth label="Email"
                variant="outlined" 
                name="gmail" value={formData.gmail} onChange={handleFormChange}
                error={!!errors.gmail} 
                helperText={errors.gmail}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Join Date"
                  type="date"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  name="joinDate" value={formData.joinDate}  onChange={handleFormChange}
                  error={!!errors.joinDate} 
                  helperText={errors.joinDate}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                fullWidth label="Phone Number" 
                variant="outlined" 
                name="phno" value={formData.phno}  onChange={handleFormChange}              
                error={!!errors.phno} 
                helperText={errors.phno}
                 />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                fullWidth label="Salary" 
                variant="outlined" 
                name="salary" value={formData.salary} onChange={handleFormChange}
                error={!!errors.salary} 
                helperText={errors.salary}
                />
              </Grid>
              
            </Grid>
            </FormControl>
          </CardContent>
          <CardActions>
            <Button variant="contained" onClick={createUser}>Add</Button>
            <Button variant="contained" onClick={()=>{navigate('/Empdetails')}}style={{backgroundColor:"darkred"}}>Cancel</Button>
            </CardActions>
        </Card>
        </Paper>
      </Grid>
    </Grid>

        </Box>
      </Box>
      </div>
    </>
  )
}










// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 450,
//     },
//   },
// };

// const names = [
//   'Engineering',
//   'Production',
//   'Sales Executive',
//   'Marketing',
//   'Administration',
//   'IT',
  
// ];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }


// function Departments() {
//   const theme = useTheme();
//   const [personName, setPersonName] = useState([]);
//   const [dept, setDept]=useState("");
  
//   const handleDeptChange=(e)=>{
//     setDept(e.target.value);
//   }
 
//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === 'string' ? value.split(',') : value,
//     );
//   };
 
//   return (
//     <div>
//       <FormControl sx={{ m: 1, width: 570 }} style={{marginLeft:'0px',}}>
//         <InputLabel className='input'  id="demo-multiple-name-label">Employee Department</InputLabel>
//         <Select
//           labelId="demo-multiple-name-label"
//           id="demo-multiple-name"
//           multiple
//           value={personName}
//           onChange={()=>{handleChange();handleDeptChange()}}
//           input={<OutlinedInput label="Employee Department" />}
//           MenuProps={MenuProps}
//         >
//           {names.map((name) => (
//             <MenuItem
//               key={name}
//               value={name}
//               style={getStyles(name, personName, theme)}
//             >
//               {name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
//  }


