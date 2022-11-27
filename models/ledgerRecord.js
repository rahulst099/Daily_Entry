/**
 * This file represents the scehma for the ProductDetails resource
 */
const mongoose = require("mongoose");
 
const ledgerRecord = new mongoose.Schema({
    supplierId: {
        type: String,
        required: true
    },
    clientID: {
        type: String,
        required: true
    },
    specificdate: {
        type: Number,
        required: true,
    },
    currentdate: {
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
  
module.exports = mongoose.model("LedgerRecord", ledgerRecord);