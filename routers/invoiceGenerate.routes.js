const invoiceGenrate = require("../controllers/invoiceGenrate");
const { authJwt, verifyinvoiceGenerateReqBody } = require("../middlewares");



/**
 * Routes for the invoiceGenerate resource
 */

module.exports = function (app) {
    app.get("/DailyEntry/api/v1/invoiceGenerate", [authJwt.verifyToken], invoiceGenerateController.getAllinvoiceGenerate);
    app.get("/DailyEntry/api/v1/invoiceGenerate/:id", [authJwt.verifyToken], invoiceGenerateController.getinvoiceGenerate);
    app.post("/DailyEntry/api/v1/invoiceGenerate/", [authJwt.verifyToken, authJwt.isAdmin, verifyinvoiceGenerateReqBody.validateinvoiceGenerateRequestBody], invoiceGenerateController.createinvoiceGenerate);
    app.put("/DailyEntry/api/v1/invoiceGenerate/:id", [authJwt.verifyToken, authJwt.isAdmin, verifyinvoiceGenerateReqBody.validateinvoiceGenerateRequestBody], invoiceGenerateController.updateinvoiceGenerate);
    app.delete("/DailyEntry/api/v1/invoiceGenerate/:id", [authJwt.verifyToken, authJwt.isAdmin], invoiceGenerateController.deleteinvoiceGenerate);
}
