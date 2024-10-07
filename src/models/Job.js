const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    job_title: String,
    company: String,
    required_skills: [String],
    location: String,
    experience_level: String,
    job_type: String,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
