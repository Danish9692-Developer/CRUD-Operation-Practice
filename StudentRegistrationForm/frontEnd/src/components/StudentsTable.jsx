import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, } from '@mui/material';
import React from 'react'
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import VisibilityIcon from "@mui/icons-material/Visibility";

import axios from 'axios';
import { useState } from 'react';

const StudentsTable = ({ students, loading, refreshStudents }) => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("view");
  const [selectedStudent, setSelectedStudent] = useState(null);

  //  Fetch students
  // const fetchStudents = async () => {
  //  try {
  //   const res = await axios.get("http://localhost:3030/student");
  //    setStudents(res.data);
  //   } catch (error) {
  //   console.error(error);
  //  } finally {
  //   setLoading(false);
  //  }
  // };

  // useEffect(() => {
  //  fetchStudents();
  // }, []);

  //  Delete student
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this student?")) return;
    try {
      await axios.delete(`http://localhost:3030/student/${id}`);
      refreshStudents();
    } catch (error) {
      console.error(error);
    }
  };

  const handleView = (student) => {
    setSelectedStudent(student);
    setMode("view");
    setOpen(true);
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setMode("edit");
    setOpen(true);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:3030/student/${selectedStudent._id}`,
        selectedStudent
      );
      setOpen(false);
      refreshStudents();
    } catch (error) {
      console.error(error);
    }
  };

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
                <TableCell>Student Id</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell align='center'>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {loading ? (
                <TableRow >
                  <TableCell colSpan={6} align='center'>
                    Loading...
                  </TableCell>
                </TableRow>
              ) : students.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align='center'>
                    No Student Found
                  </TableCell>
                </TableRow>
              ) : (
                students.map((student, index) => (
                  <TableRow key={student._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{student.firstName}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.studentClass}</TableCell>
                    <TableCell>{student.studentId}</TableCell>
                    <TableCell>{student.contact}</TableCell>
                    <TableCell align="center">
                      <IconButton color='success' aria-label='view' onClick={() => handleView(student)}>
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton color="primary" aria-label='edit' onClick={() => handleEdit(student)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton color="error" aria-label='delete'
                        onClick={() => handleDelete(student._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )))}
            </TableBody>

          </Table>
        </TableContainer>
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>
          {mode === "view" ? "View Student" : "Edit Student"}
        </DialogTitle>

        <DialogContent>
          <TextField
            fullWidth
            margin="normal"
            label="First Name"
            value={selectedStudent?.firstName || ""}
            disabled={mode === "view"}
            onChange={(e) =>
              setSelectedStudent({ ...selectedStudent, firstName: e.target.value })
            }
          />

          <TextField
            fullWidth
            margin="normal"
            label="Email"
            value={selectedStudent?.email || ""}
            disabled={mode === "view"}
            onChange={(e) =>
              setSelectedStudent({ ...selectedStudent, email: e.target.value })
            }
          />

          <TextField
            fullWidth
            margin="normal"
            label="Class"
            value={selectedStudent?.studentClass || ""}
            disabled={mode === "view"}
            onChange={(e) =>
              setSelectedStudent({ ...selectedStudent, studentClass: e.target.value })
            }
          />

          <TextField
            fullWidth
            margin="normal"
            label="Contact"
            value={selectedStudent?.contact || ""}
            disabled={mode === "view"}
            onChange={(e) =>
              setSelectedStudent({ ...selectedStudent, contact: e.target.value })
            }
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>

          {mode === "edit" && (
            <Button variant="contained" onClick={handleUpdate}>
              Update
            </Button>
          )}
        </DialogActions>
      </Dialog>

    </>
  );
};

export default StudentsTable;
