const mongoose = require('mongoose');

const interactionSchema = new mongoose.Schema({
    ibmToken: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    initialComment: {
        type: String,
        required: true
    },
    productID: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user-interaction', interactionSchema);
