const constants = require("../utils/constants");
var ObjectId = require('mongoose').Types.ObjectId;
const client = require("../models/client");


validateClientRequestBody = async (req, res, next) => {

    //Validate the client id is passed
    if (!req.body.clientId) {
        return res.status(400).send({
            message: "Failed! clientId is not provided !"
        });

    }
    //Validate the client id is valid
    if (!ObjectId.isValid(req.body.clientId)) {
        return res.status(400).send({
            message: "Failed! clientId is not valid format !"
        });
    }

    //Validte if the client exists


    //Validate the client id is passed
    if (!req.body.clientId) {
        return res.status(400).send({
            message: "Failed! clientId is not provided !"
        });

    }
    //Validate the client id is valid
    if (!ObjectId.isValid(req.body.clientId)) {
        return res.status(400).send({
            message: "Failed! clientId is not valid format !"
        });

    }

    /**
     * Validate if the movide id is present inside the client
     */
    console.log(req.body.clientId);
    const client = await client.findOne({_id : req.body.clientId});

    if(client == null){
        return res.status(400).send({
            message: "Failed! client passed doesn't exist !"
        });
    }
    console.log(client);
    if(!client.clients.includes(req.body.clientId)){
        return res.status(400).send({
            message: "Failed! clientId passed is not available inside the client !"
        });
    }

    next();

}
const verifyClientReqBody = {
    validateClientRequestBody : validateClientRequestBody
};

module.exports = verifyClientReqBody;