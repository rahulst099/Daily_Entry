/**
 * This file represents the scehma for the ProductDetails resource
 */
const mongoose = require("mongoose");
 
const supplierDetails = new mongoose.Schema({
    supplierName: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    brand: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    brokerageRate: {
        type: String,
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
 
module.exports = mongoose.model("SupplierDetails", supplierDetails);