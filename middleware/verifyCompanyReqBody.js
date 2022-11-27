const constants = require("../utils/constants");
var ObjectId = require('mongoose').Types.ObjectId;
const company = require("../models/company");


validateCompanyRequestBody = async (req, res, next) => {

    //Validate the company id is passed
    if (!req.body.companyId) {
        return res.status(400).send({
            message: "Failed! companyId is not provided !"
        });

    }
    //Validate the company id is valid
    if (!ObjectId.isValid(req.body.companyId)) {
        return res.status(400).send({
            message: "Failed! companyId is not valid format !"
        });

    }
    //Validate the company id is passed
    if (!req.body.companyId) {
        return res.status(400).send({
            message: "Failed! companyId is not provided !"
        });

    }
    //Validate the company id is valid
    if (!ObjectId.isValid(req.body.companyId)) {
        return res.status(400).send({
            message: "Failed! companyId is not valid format !"
        });

    }

    /**
     * Validate if the movide id is present inside the company
     */
    console.log(req.body.companyId);
    const company = await company.findOne({_id : req.body.companyId});

    if(company == null){
        return res.status(400).send({
            message: "Failed! company passed doesn't exist !"
        });
    }
    console.log(company);
    if(!company.companys.includes(req.body.companyId)){
        return res.status(400).send({
            message: "Failed! companyId passed is not available inside the company !"
        });
    }

    next();

}
const verifyCompanyReqBody = {
    validateCompanyRequestBody : validateCompanyRequestBody
};

module.exports = verifyCompanyReqBody;