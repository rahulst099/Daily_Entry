const ledgerRecord = require("../controllers/ledgerRecord");
const { authJwt, verifyledgerRecordReqBody } = require("../middlewares");



/**
 * Routes for the ledgerRecord resource
 */

module.exports = function (app) {
    app.get("/DailyEntry/api/v1/ledgerRecord", [authJwt.verifyToken], ledgerRecordController.getAllledgerRecord);
    app.get("/DailyEntry/api/v1/ledgerRecord/:id", [authJwt.verifyToken], ledgerRecordController.getledgerRecord);
    app.post("/DailyEntry/api/v1/ledgerRecord/", [authJwt.verifyToken, authJwt.isAdmin, verifyledgerRecordReqBody.validateledgerRecordRequestBody], ledgerRecordController.createledgerRecord);
    app.put("/DailyEntry/api/v1/ledgerRecord/:id", [authJwt.verifyToken, authJwt.isAdmin, verifyledgerRecordReqBody.validateledgerRecordRequestBody], ledgerRecordController.updateledgerRecord);
    app.delete("/DailyEntry/api/v1/ledgerRecord/:id", [authJwt.verifyToken, authJwt.isAdmin], ledgerRecordController.deleteledgerRecord);
}
