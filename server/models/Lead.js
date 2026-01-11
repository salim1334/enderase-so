
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leadSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    services: {
        type: [String],
        required: true
    },
    visitDate: {
        type: String,
        required: true
    },
    visitTime: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Lead', leadSchema);
