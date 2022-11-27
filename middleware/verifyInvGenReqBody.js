const constants = require("../utils/constants");
var ObjectId = require('mongoose').Types.ObjectId;
const invoiceGenrate = require("../models/invoiceGenrate");


validateInvoiceGenerateRequestBody = async (req, res, next) => {

    //Validate the invoiceGenerate id is passed
    if (!req.body.invoiceGenerateId) {
        return res.status(400).send({
            message: "Failed! invoiceGenerateId is not provided !"
        });

    }
    //Validate the invoiceGenerate id is valid
    if (!ObjectId.isValid(req.body.invoiceGenerateId)) {
        return res.status(400).send({
            message: "Failed! invoiceGenerateId is not valid format !"
        });

    }

    //Validte if the invoiceGenerate exists


    //Validate the invoiceGenerate id is passed
    if (!req.body.invoiceGenerateId) {
        return res.status(400).send({
            message: "Failed! invoiceGenerateId is not provided !"
        });

    }
    //Validate the invoiceGenerate id is valid
    if (!ObjectId.isValid(req.body.invoiceGenerateId)) {
        return res.status(400).send({
            message: "Failed! invoiceGenerateId is not valid format !"
        });

    }

    /**
     * Validate if the movide id is present inside the invoiceGenerate
     */
    console.log(req.body.invoiceGenerateId);
    const invoiceGenerate = await invoiceGenerate.findOne({_id : req.body.invoiceGenerateId});

    if(invoiceGenerate == null){
        return res.status(400).send({
            message: "Failed! invoiceGenerate passed doesn't exist !"
        });
    }
    console.log(invoiceGenerate);
    if(!invoiceGenerate.invoiceGenerates.includes(req.body.invoiceGenerateId)){
        return res.status(400).send({
            message: "Failed! invoiceGenerateId passed is not available inside the invoiceGenerate !"
        });
    }

    next();

}
const verifyInvoiceGenerateReqBody = {
    validateInvoiceGenerateRequestBody : validateInvoiceGenerateRequestBody
};

module.exports = verifyInvoiceGenerateReqBody;