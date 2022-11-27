const supplier = require("../models/supplier");

/**
 *  request supplier body
 */
exports.Supplier = async (req, res) => {
    
    var supplier = req.body.supplier

    const supplierObjToBeStoredInDB = {
        supplierName : req.body.supplierName,
        product : req.body.product,
        brand : req.body.brand,
        quantity : req.body.quantity,
        brokerageRate : req.brokerageRate,
    }
    /**
     * Insert this new supplier to the db
     */
    try {
    const supplierCreated = await supplier.create(supplierObjToBeStoredInDB);

    console.log("supplierr created ", supplierrCreated);

    /**
     * Return the response
     */
    const supplierrCreationResponse  = {
        supplierName : supplierCreated.supplierName,
        product : supplierCreated.product,
        brand : supplierCreated.brand,
        quantity : supplierCreated.quantity,
        brokerageRate : supplierCreated.brokerageRate,
        createdAt : supplierCreated.createdAt,
        updatedAt : supplierCreated.updatedAt
    }

    res.status(201).send(supplierrCreationResponse);
} catch(err){
    console.error("Error while creating new supplier", err.message);
    res.status(500).send({
        message : "some internal error while inserting new supplier"
    })
}

// all supplier to show 
exports.getAllsupplier = async (req, res) => {

    const queryObj = {};

    if (req.query.name != undefined) {
        queryObj.name = req.query.name;
    }
    const supplier = await supplier.find(queryObj);
    
    res.status(200).send(supplier);

}
/**
 *  Update the supplier 
 */

exports.updateSupplier = async (req, res) => {

    const savedsupplier = await supplier.findOne({ _id: req.params.id });

    if (!savedsupplier) {
        res.status(400).send({
            message: "supplier being updated doesn't exist"
        });
    }

    savedsupplier.supplierName = req.body.supplierName != undefined ? req.body.supplierName : savedsupplier.supplierName;
    savedsupplier.product = req.body.clientName != undefined ? req.body.clientName : savedsupplier.clientName;
    savedsupplier.brand = req.body.brand != undefined ? req.body.brand : savedsupplier.brand;
    savedsupplier.quantity = req.body.quantity != undefined ? req.body.quantity : savedsupplier.quantity;
    savedsupplier.brokerageRate= req.body.brokerageRate != undefined ? req.body.brokerageRate : savedsupplier.brokerageRate;

    var updatedsupplier = await savedsupplier.save();

    res.status(200).send(updatedsupplier);
}


/**
 * Delete the product resource supplier
 */
 exports.deletesupplier = async (req, res) => {

    await Product.deleteOne({
        _id: req.params.id
    });
    res.status(200).send({
        message: "Successfully delete supplier with id [ " + req.params.id + " ]"
    });

};

}