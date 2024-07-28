import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../NewCom/Sidebar';
import Navbar from '../NewCom/Navbar';
import '../Dash.css';
import {
    Box, Card, CardContent, Typography, Avatar, Divider, Stack, Button,
    IconButton, List, ListItem, ListItemText, ListItemIcon, TextField, Container
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const Profile = () => {
    const [adminInfo, setAdminInfo] = useState({
       
        phone: '',
        location: '',
        bio: '',
        
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/profile/info')
            .then(response => setAdminInfo(response.data))
            .catch(error => console.error('Error fetching admin info:', error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAdminInfo({
            ...adminInfo,
            [name]: value
        });
    };

    const handleSave = () => {
        axios.put('http://localhost:8080/profile/update', adminInfo)
            .then(response => {
                setAdminInfo(response.data);
                setIsEditing(false);
            })
            .catch(error => console.error('Error updating admin info:', error));
    };

    return (
        <div className='profile'>
            <Navbar />
            <Box height={70} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Container maxWidth="md">
                        <Card>
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    Admin Profile
                                </Typography>
                                <Divider />
                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                    <Avatar
                                        alt="Admin"
                                        // src={adminInfo.avatar}
                                        sx={{ width: 100, height: 100, mr: 3 }}
                                    />
                                    <Stack spacing={2}>
                                        <Typography variant="h6">{adminInfo.name}</Typography>
                                        <Typography variant="subtitle1" color="text.secondary">Administrator</Typography>
                                    </Stack>
                                </Box>
                                <Stack spacing={2} mt={2}>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon>
                                                <EmailIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={adminInfo.email} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CallIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={isEditing ?
                                                    <TextField
                                                        name="phone"
                                                        value={adminInfo.phone}
                                                        onChange={handleInputChange}
                                                    />
                                                    : adminInfo.phone}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <LocationOnIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={isEditing ?
                                                    <TextField
                                                        name="location"
                                                        value={adminInfo.location}
                                                        onChange={handleInputChange}
                                                    />
                                                    : adminInfo.location}
                                            />
                                        </ListItem>
                                    </List>
                                    <Typography variant="body1">
                                        {isEditing ?
                                            <TextField
                                                name="bio"
                                                value={adminInfo.bio}
                                                onChange={handleInputChange}
                                                multiline
                                                rows={4}
                                                fullWidth
                                            />
                                            : adminInfo.bio}
                                    </Typography>
                                </Stack>
                                <Box mt={3}>
                                    {isEditing ? (
                                        <Button startIcon={<SaveIcon />} variant="contained" color="primary" onClick={handleSave}>
                                            Save Profile
                                        </Button>
                                    ) : (
                                        <Button startIcon={<EditIcon />} variant="contained" color="primary" onClick={() => setIsEditing(true)}>
                                            Edit Profile
                                        </Button>
                                    )}
                                </Box>
                            </CardContent>
                        </Card>
                    </Container>
                </Box>
            </Box>
        </div>
    );
};

export default Profile;





// import React from 'react';
// import Sidebar from '../NewCom/Sidebar';
// import Navbar from '../NewCom/Navbar';
// import '../Dash.css';

// import { Box, Card, CardContent, Typography, Avatar, Divider, Stack, Button, IconButton, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
// import EmailIcon from '@mui/icons-material/Email';
// import CallIcon from '@mui/icons-material/Call';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import EditIcon from '@mui/icons-material/Edit';

// const AdminProfilePage = () => {
//     return (
//         <div className='profile'>
//             <Navbar />
//             <Box height={70} />
//             <Box sx={{ display: 'flex' }}>
//                 <Sidebar />
//                 <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//                     <Card sx={{ maxWidth: 700 }}>
//                         <CardContent>
//                             <Typography gutterBottom variant="h4" component="div">
//                                 Admin Profile
//                             </Typography>
//                             <Divider />
//                             <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
//                                 <Avatar
//                                     alt="Admin"
//                                     src=""
//                                     sx={{ width: 100, height: 100, mr: 3 }}
//                                 />
//                                 <Stack spacing={2}>
//                                     <Typography variant="h6">Admin User</Typography>
//                                     <Typography variant="subtitle1" color="text.secondary">Administrator</Typography>
//                                 </Stack>
//                             </Box>
//                             <Stack spacing={2} mt={2}>
//                                 <List>
//                                     <ListItem>
//                                         <ListItemIcon>
//                                             <EmailIcon />
//                                         </ListItemIcon>
//                                         <ListItemText primary="admin@example.com" />
//                                     </ListItem>
//                                     <ListItem>
//                                         <ListItemIcon>
//                                             <CallIcon />
//                                         </ListItemIcon>
//                                         <ListItemText primary="+1234567890" />
//                                     </ListItem>
//                                     <ListItem>
//                                         <ListItemIcon>
//                                             <LocationOnIcon />
//                                         </ListItemIcon>
//                                         <ListItemText primary="New York, USA" />
//                                     </ListItem>
//                                 </List>
//                                 <Typography variant="body1">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat nibh ac aliquet consequat. Sed ut ultricies quam. Quisque convallis ultricies est ac lacinia.
//                                 </Typography>
//                             </Stack>
//                             <Box mt={3}>
//                                 <Button startIcon={<EditIcon />} variant="contained" color="primary">Edit Profile</Button>
//                             </Box>
//                         </CardContent>
//                     </Card>
//                 </Box>
//             </Box>
//         </div>
//     );
// };

// export default AdminProfilePage;



// import React from 'react'
// import Sidebar from '../NewCom/Sidebar';
// import Navbar from '../NewCom/Navbar';
// import '../Dash.css'

// import { Box, Card, CardContent, Typography,Avatar,Divider,Stack} from '@mui/material';
// import EmailIcon from '@mui/icons-material/Email';
// import CallIcon from '@mui/icons-material/Call';

// const About = () => {
//     return (
//         <>
//             <div className='profile'>
//                 <Navbar />
//                 <Box height={70} />
//                 <Box sx={{ display: 'flex' }}>
//                     <Sidebar />

//                     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//                         <Card sx={{ maxWidth: 700 ,minHeight: 250}}>
//                              <div className='avatar'>

//                         <Avatar
//   alt="Remy Sharp"
//   src=""
//   sx={{ width: 56, height: 56 ,marginLeft: 3,marginTop:3}}
// />
//                              </div>
//                             <CardContent>
//                                 <Typography gutterBottom variant="h5" component="div">
//                                     Madhulekha
//                                 </Typography>
//                                 <Typography gutterBottom variant="h7" component="div">
//                                    About me
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                I am a sales executive at MMM Private Ltd., a leading company in the software industry.
//                                  I have over 10 years of experience in selling software solutions to various clients across India and abroad.
//                                  I have skilled in negotiating, closing deals, and building long-term relationships with customers.
//                                 </Typography>
//                             </CardContent>

//                         </Card>
//                         <Box height={20} />
//                         <Card sx={{ minWidth: 545  ,minHeight: 350}}>

//                             <CardContent>
//                                 <Typography gutterBottom variant="h5" component="div">
//                                    Details
//                                 </Typography><br/>
//                                 <Stack spacing={1}>
//                                 <Typography gutterBottom variant="h7" component="div"><pre>Fullname            Madhulekha</pre></Typography><Divider/>
//                                 <Typography gutterBottom variant="h7" component="div"><pre>User status         Active Employee</pre></Typography><Divider/>
//                                 <Typography gutterBottom variant="h7" component="div"><pre>Employee Type       Full Time</pre></Typography><Divider/>
//                                 <Typography gutterBottom variant="h7" component="div"><pre>Start date          27/11/2023</pre></Typography><Divider/>
//                                 <Stack direction="row" spacing={2}>
//                                 <EmailIcon/><h4>madhulekha@gmail.com</h4>
//                                 <CallIcon/><h4>+91 9988776655</h4>
//                                 </Stack>
                                
//                                 </Stack>
//                             </CardContent>

//                         </Card>
//                     </Box>
//                 </Box>
//             </div>
//         </>
//     )
// }

// export default About