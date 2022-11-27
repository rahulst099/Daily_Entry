const invoiceGeCreated = require("../models/invoiceGeCreatedr.invoiceGeCreated");

/**
 *  request invoiceGeCreated body
 */
exports.InvoiceGeCreated = async (req, res) => {
    
    var invoiceGeCreated = req.body.invoiceGeCreated

    const invoiceGeCreatedObjToBeStoredInDB = {
        id : req.body.id,
        specificDate : req.body.specificDate,
        currentDate : req.body.currentDate,
    }
    /**
     * Insert this new invoiceGeCreated to the db
     */
    try {
    const invoiceGeCreatedCreated = await invoiceGeCreated.create(invoiceGeCreatedObjToBeStoredInDB);

    console.log("invoiceGeCreatedr created ", invoiceGeCreatedrCreated);

    /**
     * Return the response
     */
    const invoiceGeCreatedrCreationResponse  = {
        id : invoiceGeCreatedCreated.id,
        specificDate : invoiceGeCreatedCreated.specificDate,
        currentDate : invoiceGeCreatedCreated.currentDate,
        createdAt : invoiceGeCreatedCreated.createdAt,
        updatedAt : invoiceGeCreatedCreated.updatedAt
    }

    res.status(201).send(invoiceGeCreatedrCreationResponse);
} catch(err){
    console.error("Error while creating new invoiceGeCreated", err.message);
    res.status(500).send({
        message : "some internal error while inserting new invoiceGeCreated"
    })
}

// all invoiceGeCreated to show 
exports.getAllinvoiceGeCreated = async (req, res) => {

    const queryObj = {};

    if (req.query.name != undefined) {
        queryObj.name = req.query.name;
    }
    const invoiceGeCreated = await invoiceGeCreated.find(queryObj);
    
    res.status(200).send(invoiceGeCreated);

}
/**
 *  Update the invoiceGeCreated 
 */

exports.updateinvoiceGeCreated = async (req, res) => {

    const savedinvoiceGeCreated = await invoiceGeCreated.findOne({ _id: req.params.id });

    if (!savedinvoiceGeCreated) {
        res.status(400).send({
            message: "invoiceGeCreated being updated doesn't exist"
        });
    }

    savedinvoiceGeCreated.id = req.body.id != undefined ? req.body.id : savedinvoiceGeCreated.id;
    savedinvoiceGeCreated.specificDate = req.body.specificDate != undefined ? req.body.specificDate : savedinvoiceGeCreated.specificDate;
    savedinvoiceGeCreated.currentDate = req.body.currentDate != undefined ? req.body.currentDate : savedinvoiceGeCreated.currentDate;
    
    var updatedinvoiceGeCreated = await savedinvoiceGeCreated.save();

    res.status(200).send(updatedinvoiceGeCreated);
}


/**
 * Delete the product resource invoiceGeCreated
 */
 exports.deleteinvoiceGeCreated = async (req, res) => {

    await Product.deleteOne({
        _id: req.params.id
    });
    res.status(200).send({
        message: "Successfully delete invoiceGeCreated with id [ " + req.params.id + " ]"
    });

};

}