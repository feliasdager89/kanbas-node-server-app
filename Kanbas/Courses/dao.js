const Course = require('../models/Course');

const findAllCourses = () => Course.find();
const findCourseById = (id) => Course.findById(id);
const createCourse = (course) => Course.create(course);
const updateCourse = (id, course) => Course.findByIdAndUpdate(id, course, { new: true });
const deleteCourse = (id) => Course.findByIdAndDelete(id);

module.exports = {
  findAllCourses,
  findCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};