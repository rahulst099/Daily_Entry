/**
 * This file will hold the schema for the DailyEntry resource
 */
 const mongoose = require("mongoose");

 const clientSchema = new mongoose.Schema({
 
    clientname : {
        type : String,
        required : true
    },
    product : {
        type : String,
        required : true,
        unique : true
    },
    brand :{
        type : String,
        required : true
    },
    unit : {
        type : Number,
        required : true,
    },
    quantity : {
        type : Number,
        required : true,
    },
    rate : {
        Type : String,
        required : true,
    },
    brokerage : {
        Type : Number,
        required : true,
    },
    date: {
        Type : Number,
        required : true,
    },
    id : {
        Type : Number,
        required : true,
    },
    time : {
        Type : Number,
        required : true,
    },

    createdAt : {
        type : Date,
        immutable : true,
        default : ()=>{
            return Date.now();
        }
    },
    updatedAt : {
        type : Date,
        default : ()=>{
            return Date.now();
        }
    },
 
});
 
module.exports = mongoose.model("Client", clientSchema);