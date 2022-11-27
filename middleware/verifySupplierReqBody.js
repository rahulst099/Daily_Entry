const constants = require("../utils/constants");
var ObjectId = require('mongoose').Types.ObjectId;
const supplier = require("../models/supplier");


validateSupplierRequestBody = async (req, res, next) => {

    //Validate the supplier id is passed
    if (!req.body.supplierId) {
        return res.status(400).send({
            message: "Failed! supplierId is not provided !"
        });

    }
    //Validate the supplier id is valid
    if (!ObjectId.isValid(req.body.supplierId)) {
        return res.status(400).send({
            message: "Failed! supplierId is not valid format !"
        });

    }

    //Validte if the supplier exists


    //Validate the supplier id is passed
    if (!req.body.supplierId) {
        return res.status(400).send({
            message: "Failed! supplierId is not provided !"
        });

    }
    //Validate the supplier id is valid
    if (!ObjectId.isValid(req.body.supplierId)) {
        return res.status(400).send({
            message: "Failed! supplierId is not valid format !"
        });

    }

    /**
     * Validate if the supplier id is present inside the supplier
     */
    console.log(req.body.supplierId);
    const supplier = await supplier.findOne({_id : req.body.supplierId});

    if(supplier == null){
        return res.status(400).send({
            message: "Failed! supplier passed doesn't exist !"
        });
    }
    console.log(supplier);
    if(!supplier.suppliers.includes(req.body.supplierId)){
        return res.status(400).send({
            message: "Failed! supplierId passed is not available inside the supplier !"
        });
    }

    next();

}
const verifySupplierReqBody = {
    validateSupplierRequestBody : validateSupplierRequestBody
};

module.exports = verifySupplierReqBody;