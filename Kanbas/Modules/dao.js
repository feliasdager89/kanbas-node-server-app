const Module = require('../models/Module');

const findModulesForCourse = (courseId) => Module.find({ course: courseId });
const findModuleById = (id) => Module.findById(id);
const createModule = (module) => Module.create(module);
const updateModule = (id, module) => Module.findByIdAndUpdate(id, module, { new: true });
const deleteModule = (id) => Module.findByIdAndDelete(id);

module.exports = {
  findModulesForCourse,
  findModuleById,
  createModule,
  updateModule,
  deleteModule,
};