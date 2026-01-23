import React from 'react'
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material"
import { useState } from 'react';
import axios from 'axios';

const RegistrationForm = ({onStudentAdded}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    gender: "",
    studentClass: "",
    studentId: "",
    contact: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:3030/student",
        formData);
      alert("Student Registered Seccessfully");

      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        gender: "",
        studentClass: "",
        studentId: "",
        contact: "",
      });
      onStudentAdded();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: 3,
          boxShadow: 5,
          borderRadius: 5,
          backgroundColor: "#E3EBF7"
        }}
      >
        <Typography variant='h5' mb={1}>
          Student Registration
        </Typography>

        <Typography variant='body2' color='text.secondary' mb={2}>
          Fill in all required fields
        </Typography>

        {/* Gender */}
        <FormControl fullWidth margin='normal'>
          <InputLabel>Gender</InputLabel>
          <Select
            name='gender'
            label="Gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="transgender">Transgender</MenuItem>
            <MenuItem value="pangender">Pangender</MenuItem>
          </Select>
        </FormControl>

        {/* Name Field */}
        <Box sx={{ display: "flex", gap: 5, mt: 2 }}>
          <TextField
            label="First Name"
            name='firstName'
            margin='normal'
            value={formData.firstName}
            onChange={handleChange}
          />

          <TextField
            label="Middle Name"
            name='middleName'
            margin='normal'
            value={formData.middleName}
            onChange={handleChange}
          />

          <TextField
            label="Last Name"
            name='lastName'
            margin='normal'
            value={formData.lastName}
            onChange={handleChange}
          />
        </Box>

        {/* Email */}
        <TextField
          fullWidth
          sx={{ mt: 2 }}
          label="Student Email"
          name='email'
          margin='normal'
          value={formData.email}
          onChange={handleChange}
        />

        {/* Student ID */}
        <TextField
          fullWidth
          sx={{ mt: 2 }}
          label="Student ID"
          name='studentId'
          margin='normal'
          value={formData.studentId}
          onChange={handleChange}
        />

        {/* Class */}
        <FormControl fullWidth margin='normal' sx={{ mt: 2 }}>
          <InputLabel>Class</InputLabel>
          <Select
            name='studentClass'
            label="Class"
            value={formData.studentClass}
            onChange={handleChange}
          >
            <MenuItem value="12th">12th</MenuItem>
            <MenuItem value="11th">11th</MenuItem>
            <MenuItem value="10th">10th</MenuItem>
            <MenuItem value="9th">9th</MenuItem>
            <MenuItem value="8th">8th</MenuItem>
            <MenuItem value="7th">7th</MenuItem>
            <MenuItem value="6th">6th</MenuItem>
            <MenuItem value="5th">5th</MenuItem>
            <MenuItem value="4th">4th</MenuItem>
            <MenuItem value="3rd">3rd</MenuItem>
            <MenuItem value="2nd">2nd</MenuItem>
            <MenuItem value="1st">1st</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          sx={{ mt: 2 }}
          label="Contact No."
          name='contact'
          margin='normal'
          value={formData.contact}
          onChange={handleChange}
          inputProps={{
            maxLength: 10,
          }}
        />


        <Button
          fullWidth
          type='submit'
          variant='contained'
          sx={{ mt: 2 }}
        >
          Register
        </Button>
      </Box>
    </>
  );
};

export default RegistrationForm;
