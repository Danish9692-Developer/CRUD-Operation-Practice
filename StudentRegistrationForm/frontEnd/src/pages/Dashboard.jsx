import React from 'react'
import RegistrationForm from '../components/RegistrationForm';
import StudentsTable from '../components/StudentsTable';
import { Box } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:3030/student");
      setStudents(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

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
        <RegistrationForm onStudentAdded={fetchStudents} />
      </Box>

      <Box mt={3}>
        <StudentsTable
          students={students}
          loading={loading}
          refreshStudents={fetchStudents}
        />
      </Box>
    </>
  );
};

export default Dashboard;
