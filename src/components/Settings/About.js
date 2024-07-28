import React from 'react'
import Sidebar from '../../NewCom/Sidebar';
import Navbar from '../../NewCom/Navbar';
import '../../Dash.css'

import {Box,Card} from '@mui/material';
import Items from './Items';


const About = () => {
  return (
    <>
    <div className='profile'>
     <Navbar/>
   <Box height={90} />
   <Box sx={{ display: 'flex'  }}>
               <Sidebar/>
               <Card sx={{minWidth: 900, minHeight: 500,margin: 2}}>
               <Items/>
               </Card>
             
              
          <Box component="main" sx={{flexGrow: 1,p: 3}}>
          </Box>
   </Box>
   </div>
   </>
  )
}

export default About