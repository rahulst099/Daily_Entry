const constants = require("../utils/constants");
var ObjectId = require('mongoose').Types.ObjectId;
const invoiceGenrate = require("../models/invoiceGenrate");


validateLedRecRequestBody = async (req, res, next) => {

    //Validate the ledRec id is passed
    if (!req.body.ledRecId) {
        return res.status(400).send({
            message: "Failed! ledRecId is not provided !"
        });

    }
    //Validate the ledRec id is valid
    if (!ObjectId.isValid(req.body.ledRecId)) {
        return res.status(400).send({
            message: "Failed! ledRecId is not valid format !"
        });

    }

    //Validte if the ledRec exists


    //Validate the ledRec id is passed
    if (!req.body.ledRecId) {
        return res.status(400).send({
            message: "Failed! ledRecId is not provided !"
        });

    }
    //Validate the ledRec id is valid
    if (!ObjectId.isValid(req.body.ledRecId)) {
        return res.status(400).send({
            message: "Failed! ledRecId is not valid format !"
        });

    }

    /**
     * Validate if the movide id is present inside the ledRec
     */
    console.log(req.body.ledRecId);
    const ledRec = await ledRec.findOne({_id : req.body.ledRecId});

    if(ledRec == null){
        return res.status(400).send({
            message: "Failed! ledRec passed doesn't exist !"
        });
    }
    console.log(ledRec);
    if(!ledRec.ledRecs.includes(req.body.ledRecId)){
        return res.status(400).send({
            message: "Failed! ledRecId passed is not available inside the ledRec !"
        });
    }

    next();

}
const verifyLedRecReqBody = {
    validateLedRecRequestBody : validateLedRecRequestBody
};

module.exports = verifyLedRecReqBody;