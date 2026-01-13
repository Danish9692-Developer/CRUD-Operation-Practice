import React from 'react'
import RegistrationForm from '../components/RegistrationForm';
import StudentsTable from '../components/StudentsTable';
import { Box } from '@mui/material';

const Dashboard = () => {
  return (
    <>
    <Box sx={{
     p: 3,
     boxShadow: 5,
     borderRadius: 5,
     backgroundColor: "#E3EBF7",
     mb: 2,
     display: "flex",
     justifyContent: "center",
    }}>
     <h1>Dashboard</h1>
    </Box>

     <Box>
     <RegistrationForm/>
    </Box>

    <div>
     <StudentsTable/>
    </div>
    </>
  )
}

export default Dashboard;
