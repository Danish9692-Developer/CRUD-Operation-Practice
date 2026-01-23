const express = require("express");
const {
 registerStudent,
 getStudents,
 updateStudent,
 deleteStudent,
} = require ("../controllers/student-controller");

const router = express.Router();

router.post("/", registerStudent);
router.get("/", getStudents);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;