const mongoose = require('mongoose');

// Define the schema using mongoose.Schema()
const contactSchema = new mongoose.Schema({

        name: { type: String, required: true },
        mobile: { type: Number, required: true },
        email: { type: String, required: true },
        message: { type: String, required: true }
});

module.exports = mongoose.model('Contact', contactSchema);
