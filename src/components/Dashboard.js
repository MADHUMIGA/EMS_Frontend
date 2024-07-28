import React from 'react';
import Sidebar from '../NewCom/Sidebar';
import Navbar from '../NewCom/Navbar';
import Barchart from '../chart/Barchart';
import '../Dash.css';

import Box from '@mui/material/Box';
import { CardHeader, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Groups2Icon from '@mui/icons-material/Groups2';
import HailIcon from '@mui/icons-material/Hail';

const Dashboard = () => {
  const data = [
    { id: 0, value: 45, label: 'Male' },
    { id: 1, value: 45, label: 'Female' },
    { id: 2, value: 10, label: 'Prefer not to say' },
  ];

  return (
    <>
      <div className='dashbg'>
        <Navbar />
        <Box height={50} />
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant="h7" color={"grey"}>DASHBOARD</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
                  <Card sx={{ flex: 1 }} className='card'>
                    <CardContent>
                      <div className='icon'>
                        <Groups2Icon />
                      </div>
                      <Typography gutterBottom variant="h3" component="div" sx={{ color: "white" }}>
                        555
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" sx={{ color: "aliceblue" }}>
                        Employees 
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ flex: 1 }} className="card">
                    <CardContent>
                      <div className='icon'>
                        <HailIcon />
                      </div>
                      <Typography gutterBottom variant="h3" component="div" sx={{ color: "white" }}>
                        111
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" sx={{ color: "aliceblue" }}>
                        Number of new hires (Sign ups in last 1 month)
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack spacing={2}>
                  <Card className="card2">
                    <CardContent>
                      <Stack spacing={2} direction="row" alignItems="center">
                        <TimelineIcon />
                        <div className="project">
                          <span className="countspan">35+</span><br />
                          <span className="span">Projects</span>
                        </div>
                      </Stack>
                    </CardContent>
                  </Card>
                  <Card className="card2">
                    <CardContent>
                      <Stack spacing={2} direction="row" alignItems="center">
                        <Diversity3Icon />
                        <div className="project">
                          <span className="countspan">66+</span><br />
                          <span className="span">Clients</span>
                        </div>
                      </Stack>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Card className='chart' sx={{ height: 350 }}>
                  <CardContent>
                    <Barchart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: 350 }}>
                  <CardHeader title="Percentage of sex ratio" className='ratio' />
                  <CardContent>
                    <div className='pie'>
                      <PieChart 
                        series={[
                          {
                            data,
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                            cx: 95, innerRadius: 20, cornerRadius: 6, cy: 100,
                          },
                        ]}
                        height={205}
                      />
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Dashboard;





