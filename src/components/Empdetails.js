import React from 'react'
import Sidebar from '../NewCom/Sidebar';
import Navbar from '../NewCom/Navbar';
import Emplist from './details/Emplist';

import Box from '@mui/material/Box';

const Empdetails = () => {
  return (
    <>
     <Navbar/>
   <Box height={70}/>
   <Box sx={{ display: 'flex' }}>
               <Sidebar/>
              
          <Box component="main" sx={{flexGrow: 1,p: 3}}>
            <Emplist/>
          </Box>
   </Box>
   </>
  )
}

export default Empdetails