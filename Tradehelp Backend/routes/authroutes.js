const express = require('express');
const router = express.Router();
const { createUsers,login, logout,getMe } = require('../controllers/authcontroller');
const protect = require("../Middleware/Middleware");

// router.get('/Signup', getUsers);
// router.post('/Signup', createUsers);
// router.put('/Signup/:id', updateUsers);
// router.delete('/Signup/:id', deleteUsers);

router.post("/signup", createUsers);
router.post("/login", login);
router.post("/Logout", logout);
router.get("/me", protect, getMe);

module.exports = router