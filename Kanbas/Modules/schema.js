const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  lessons: [{ name: String, description: String }],
});

const Module = mongoose.model('Module', moduleSchema);
module.exports = Module;