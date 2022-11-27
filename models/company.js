/**
 * This file represents the scehma for the CompanyDetails resource
 */

const mongoose = require("mongoose");
 
const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
         required: true
    },
    address: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true,
    },
    personName: {
        type: Number,
        required: true,
    },
    gstNumber: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
    brokerageFirm: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => {
            return Date.now();
        }
    },
    updatedAt: {
        type: Date,
        default: () => {
            return Date.now();
        }
    }
});
 
module.exports = mongoose.model("Company", companySchema);