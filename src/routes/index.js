const express = require('express');
const studentRouter = require('./student.routes');
const routerCourse = require('./course.routes');
const router = express.Router();

// colocar las rutas aquí
router.use('/students', studentRouter)
router.use('/courses', routerCourse)

module.exports = router;