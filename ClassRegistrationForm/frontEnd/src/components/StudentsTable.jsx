import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react'
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import VisibilityIcon from "@mui/icons-material/Visibility";


const StudentsTable = () => {
 const students = [
  {
   firstName: "Rahul",
   email: "rahul@gmail.com",
   class: "10th",
   contactNo: "028343702",
  },
  {
   firstName: "Amit",
   email: "amit@gmail.com",
   class: "9th",
   contactNo: "9876543210",
  },
 ];
 return (
  <>
   <Box>
    <TableContainer
     component={Paper}
     sx={{
      mt: 4,
      boxShadow: 5,
      borderRadius: 5,
     }}
    >
     <Typography variant='h6' sx={{ p: 2 }}>
      Registered Students
     </Typography>

     <Table>
      <TableHead>
       <TableRow sx={{ backgroundColor: "#e8f0fe" }}>
        <TableCell>Sr No.</TableCell>
        <TableCell>First Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Class</TableCell>
        <TableCell>Contact No.</TableCell>
        <TableCell align='center'>Actions</TableCell>
       </TableRow>
      </TableHead>

      <TableBody>
       {students.map((student, index) => (
       <TableRow>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{student.firstName}</TableCell>
        <TableCell>{student.email}</TableCell>
        <TableCell>{student.class}</TableCell>
        <TableCell>{student.contactNo}</TableCell>
        <TableCell align="center">
         <IconButton color='success' aria-label='view'>
          <VisibilityIcon />
         </IconButton>
         <IconButton color="primary" aria-label='edit'>
          <EditIcon />
         </IconButton>
         <IconButton color="error" aria-label='delete'>
          <DeleteIcon />
         </IconButton>
        </TableCell>
       </TableRow>
       ))}
      </TableBody>

     </Table>
    </TableContainer>
   </Box>
  </>
 )
}

export default StudentsTable;
