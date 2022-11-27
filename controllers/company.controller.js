const company = require("../models/company");
const User = require("../models/user");
const constants = require("../utils/constants");

/**
 * Get the list of all the companys.
 * Customer user should get the list of all his/her companyDetails
 */
exports.getAllComapanyDetails = async (req, res) => {

    const user = await User.findOne({
        userId: req.userId
    })

    const company = await company.find(queryObj);

    res.status(200).send(company);

}

/**
 * Get a company based on the company id
 */

exports.getCompanyOnId = async (req, res) => {
    try {
        const companys = await company.findOne({ _id: req.params.id });
        res.status(200).send(companys);
    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            message: "Internal error while searching for the company"
        })
    }

}

/**
 * Create a company
 */
exports.createcompany = async (req, res) => {

    const user = await User.findOne({
        userId: req.userId
    })
    var companyObject = {
        companyName: req.body.companyName,
        companyAddress: req.body.companyAddress,
        contactNumber : req.body.companyType,
        personName : req.body.personName,
        gstNumber : req.body.gstNumber,
        city : req.body.city,
        brokerageFirm : req.body.brokerageFirm,
    }
    try {
        const company = await company.create(companyObject);

        /**
         * Return the response 
         */
        const companyrCreationResponse  = {
            supplierName : companyCreated.supplierName,
            product : companyCreated.product,
            brand : companyCreated.brand,
            quantity : companyCreated.quantity,
            brokerage : companyCreated.brokerage,
            createdAt : companyCreated.createdAt,
            updatedAt : companyCreated.updatedAt
        }
        res.status(201).send(company);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: "Internal error while creating the company"
        })
    }

}

/**
 * Update the company
 */
exports.updatecompany = async (req, res) => {

    const company = await company.findOne({
        _id: req.params.id
    })
    company.companyName = req.body.companyName != undefined ? req.body.companyName : company.companyName;
    company.companyAddress = req.body.companyAddress != undefined ? req.body.companyAddress : company.companyAddress;
    company.contactNumber = req.body.contactNumber != undefined ? req.body.contactNumber : company.contactNumber;
    company.personName = req.body.personName != undefined ? req.body.personName : company.personName;
    company.gstNumber = req.body.gstNumber != undefined ? req.body.gstNumber : company.gstNumber;
    company.city = req.body.city != undefined ? req.body.city : company.city;
    company.brokerageFirm = req.body.brokerageFirm != undefined ? req.body.brokerageFirm : company.brokerageFirm;

    try {
        const updatedcompany = await company.save();
        res.status(201).send(updatedcompany);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: "Internal error while updating the Company"
        })
    }

}

/**
 * Delete the company resource
 */
 exports.deleteCompany = async (req, res) => {

    await company.deleteOne({
        _id: req.params.id
    });
    res.status(200).send({
        message: "Successfully delete company with id [ " + req.params.id + " ]"
    });

};


