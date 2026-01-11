
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectName: {
        type: String,
        required: true
    },
    clientType: {
        type: String,
        required: true
    },
    techStack: {
        type: [String],
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    problem: {
        type: String,
        required: true,
    },
    solution: {
        type: String,
        required: true,
    },
    impact: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
