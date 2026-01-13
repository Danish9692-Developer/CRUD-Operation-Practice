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

const RegistrationForm = () => {
 return (
  <>
   <Box
    sx={{
     p: 3,
     boxShadow: 5,
     borderRadius: 5,
     backgroundColor: "#E3EBF7"
    }}
   >
    <Typography variant='h5' mb={1}>
     Class Registration
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
     // value={FormData.gender}
     // onChange={handleChange}
     >
      <MenuItem value="Male">Male</MenuItem>
      <MenuItem value="Female">Female</MenuItem>
      <MenuItem value="Transgender">Transgender</MenuItem>
      <MenuItem value="pangender">Pangender</MenuItem>
     </Select>
    </FormControl>

    {/* Name Field */}
    <Box sx={{display: "flex", gap: 5, mt: 2}}>
    <TextField
     label="First Name"
     name='firstName'
     margin='normal'
    // value={formData.firstName}
    // onChange={handleChange}
    />

    <TextField
     label="Middle Name"
     name='middleName'
     margin='normal'
    // value={formData.middleName}
    // onChange={handleChange}
    />

    <TextField
     label="Last Name"
     name='lastName'
     margin='normal'
    // value={formData.lastName}
    // onChange={handleChange}
    />
    </Box>

    {/* Email */}
    <TextField
     fullWidth
     sx={{ mt: 2 }}
     label="Student Email"
     name='email'
     margin='normal'
    // value={formData.email}
    // onChange={handleChange}
    />

    {/* Student ID */}
    <TextField
     fullWidth
     sx={{ mt: 2 }}
     label="Student ID"
     name='studentId'
     margin='normal'
    // value={formData.studentId}
    // onChange={handleChange}
    />

    {/* Class */}
    <FormControl fullWidth margin='normal' sx={{ mt: 2 }}>
     <InputLabel>Class</InputLabel>
     <Select
      name='classes'
      label="Class"
     // value={FormData.classes}
     // onChange={handleChange}
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

     <TextField
      fullWidth
      sx={{ mt: 2 }}
      label="Contact No."
      name='contactNo.'
      margin='normal'
     // value={formData.studentId}
     // onChange={handleChange}
     />
    </FormControl>

    <Button
     fullWidth
     variant='contained'
     sx={{ mt: 2 }}
     // onClick={onSubmit}
     >
      Apply For Class
     </Button>
   </Box>
  </>
 );
}

export default RegistrationForm;
