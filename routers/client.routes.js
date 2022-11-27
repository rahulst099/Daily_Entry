const ClientController = require("../controllers/client.controller");
const { authJwt, verifydailyEntryReqBody } = require("../middlewares");



/**
 * Routes for the dailyEntry resource
 */

module.exports = function (app) {
    app.get("/DailyEntry/api/v1/client", [authJwt.verifyToken], clientController.getAlldailyEntry);
    app.get("/DailyEntry/api/v1/client/:id", [authJwt.verifyToken], clientController.getdailyEntry);
    app.post("/DailyEntry/api/v1/client/", [authJwt.verifyToken, authJwt.isAdmin, verifyClientReqBody.validateclientRequestBody], cllientController.createdailyEntry);
    app.put("/DailyEntry/api/v1/client/:id", [authJwt.verifyToken, authJwt.isAdmin, verifyclientReqBody.validateclientRequestBody], clientController.updateclient);
    app.delete("/DailyEntry/api/v1/client/:id", [authJwt.verifyToken, authJwt.isAdmin], clientController.deleteclient);
}