const Course = require('./Course')
const Student = require('./Student')

Student.belongsToMany(Course, { through: 'studentsCourses'})
Course.belongsToMany(Student, { through: 'studentsCourses'})