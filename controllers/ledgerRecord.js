const ledgerRecord = require("../models/ledgerRecord");

/**
 *  request ledgerRecord body
 */
exports.LedgerRecord = async (req, res) => {
    
    var ledgerRecord = req.body.ledgerRecord

    const ledgerRecordObjToBeStoredInDB = {
        id : req.body.id,
        specificDate : req.body.specificDate,
        currentDate : req.body.currentDate,
    }
    /**
     * Insert this new ledgerRecord to the db
     */
    try {
    const ledgerRecordCreated = await ledgerRecord.create(ledgerRecordObjToBeStoredInDB);

    console.log("ledgerRecordr created ", ledgerRecordrCreated);

    /**
     * Return the response
     */
    const ledgerRecordrCreationResponse  = {
        supplierId: ledgerRecordCreated.supplierId,
        clientId: ledgerRecordCreated.clientId,
        specificDate : ledgerRecordCreated.specificDate,
        currentDate : ledgerRecordCreated.currentDate,
        createdAt : ledgerRecordCreated.createdAt,
        updatedAt : ledgerRecordCreated.updatedAt
    }

    res.status(201).send(ledgerRecordrCreationResponse);
} catch(err){
    console.error("Error while creating new ledgerRecord", err.message);
    res.status(500).send({
        message : "some internal error while inserting new ledgerRecord"
    })
}

// all ledgerRecord to show 
exports.getAllledgerRecord = async (req, res) => {

    const queryObj = {};

    if (req.query.name != undefined) {
        queryObj.name = req.query.name;
    }
    const ledgerRecord = await ledgerRecord.find(queryObj);
    
    res.status(200).send(ledgerRecord);

}
/**
 *  Update the ledgerRecord 
 */

exports.updateledgerRecord = async (req, res) => {

    const savedledgerRecord = await ledgerRecord.findOne({ _id: req.params.id });

    if (!savedledgerRecord) {
        res.status(400).send({
            message: "ledgerRecord being updated doesn't exist"
        });
    }

    savedledgerRecord.id = req.body.id != undefined ? req.body.id : savedledgerRecord.id;
    savedledgerRecord.specificDate = req.body.specificDate != undefined ? req.body.specificDate : savedledgerRecord.specificDate;
    savedledgerRecord.currentDate = req.body.currentDate != undefined ? req.body.currentDate : savedledgerRecord.currentDate;
    
    var updatedledgerRecord = await savedledgerRecord.save();

    res.status(200).send(updatedledgerRecord);
}


/**
 * Delete the product resource ledgerRecord
 */
 exports.deleteledgerRecord = async (req, res) => {

    await Product.deleteOne({
        _id: req.params.id
    });
    res.status(200).send({
        message: "Successfully delete ledgerRecord with id [ " + req.params.id + " ]"
    });

};

}