import React from 'react';
import { Modal, Fade, Box, Typography, TextField, Button } from '@mui/material';

export default function EditEmpModal({ open, handleClose, selectedEmployee, handleChange, handleSave }) {
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
    >
      <Fade in={open}>
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2">
            Edit Employee
          </Typography>
          <TextField
            label="Name"
            name="empName"
            value={selectedEmployee?.empName || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="gmail"
            value={selectedEmployee?.gmail || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Department"
            name="dept"
            value={selectedEmployee?.dept || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Salary"
            name="salary"
            value={selectedEmployee?.salary || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}