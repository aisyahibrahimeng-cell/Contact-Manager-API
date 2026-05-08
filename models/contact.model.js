const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema ({
    user_id: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User",                         
    required: true
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    timestring:{
        type: Date,
        required: true,
        default: Date.now 
    }
});

const contactModel = mongoose.model("Contact", contactSchema);
module.exports = {contactModel};