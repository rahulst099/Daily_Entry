const client = require("../models/client");

// all client to show 
exports.getAllClient = async (req, res) => {

    const queryObj = {};

    if (req.query.name != undefined) {
        queryObj.name = req.query.name;
    }
    const client = await client.find(queryObj);
    
    res.status(200).send(client);

}

/**
* Get the client based on the id
*/
exports.getClient = async (req, res) => {
    const client = await client.findOne({
        _id: req.params.id
    });
    res.status(200).send(client);
}

/**
 * Create the client resource
 */
 exports.createclientDetail = async (req, res) => {
    const clientObject = {
        clientName: req.body.clientName,
        product: req.body.product,
        brand: req.body.brand,
        unit: req.body.unit,
        quantity : req.body.quantity,
        rate : req.body.rate,
        brokerage: req.body.brokerage,
        date : req.body.date,
        id : req.body.id,
        time : req.body.time
    }
    try {
        const client = await client.create(clientObject);
        /**
         * retrun the response 
         */
         const inputrCreationResponse  = {
            clientName : inputCreated.clientName,
            product : inputCreated.product,
            brand : inputCreated.brand,
            unit : inputCreated.unit,
            quantity : inputCreated.quantity,
            brokerage : inputCreated.brokerage,
            date : inputCreated.date,
            id : inputCreated.id,
            time : inputCreated.time,
            createdAt : inputCreated.createdAt,
            updatedAt : inputCreated.updatedAt
        }

    res.status(201).send(client);

    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: "Internal error while creating the client"
        })
    }
}

/**
 *  update client 
 */
 exports.updateclient = async (req, res) => {

    const savedclient = await client.findOne({ _id: req.params.id });

    if (!savedclient) {
        res.status(400).send({
            message: "client being updated doesn't exist"
        });
    }

    savedclient.name = req.body.name != undefined ? req.body.name : savedclient.name;
    savedclient.product = req.body.product != undefined ? req.body.product : savedclient.product;
    savedclient.brand = req.body.brand != undefined ? req.body.brand : savedclient.brand;
    savedclient.unit = req.body.unit != undefined ? req.body.unit : savedclient.unit;
    savedclient.quantity = req.body.quantity != undefined ? req.body.quantity : savedclient.quantity;
    savedclient.rate = req.body.rate != undefined ? req.body.rate : savedclient.rate;
    savedclient.brokerage = req.body.brokerage != undefined ? req.body.brokerage : savedclient.brokerage;
    savedclient.date = req.body.date != undefined ? req.body.date : savedclient.date;
    savedclient.id = req.body.unit != undefined ? req.body.id : savedclient.id;
    savedclient.time = req.body.time != undefined ? req.body.time : savedclient.time;
    var updatedclient = await savedProdut.save();

    res.status(200).send(updatedclient);
}

/**
 * Delete the client resource
 */
 exports.deleteclient = async (req, res) => {

    await client.deleteOne({
        _id: req.params.id
    });
    res.status(200).send({
        message: "Successfully delete client with id [ " + req.params.id + " ]"
    });

};
