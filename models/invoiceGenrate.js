/**
 * This file represents the scehma for the ProductDetails resource
 */
const mongoose = require("mongoose");
 
const invoiceGenerate = new mongoose.Schema({
    Id: {
        type:Number,
        required : true,
    },
    specifacdate: {
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
  
module.exports = mongoose.model("InvoiceGenerate", invoiceGenerate);