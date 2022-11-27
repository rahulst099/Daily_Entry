const supplier = require("../controllers/supplier.controller");
const { authJwt, verifySupplierReqBody } = require("../middlewares");



/**
 * Routes for the dailyEntry resource
 */

module.exports = function (app) {
    app.get("/DailyEntry/api/v1/supplier", [authJwt.verifyToken], supplierController.getAlldailyEntry);
    app.get("/DailyEntry/api/v1/supplier/:id", [authJwt.verifyToken], supplierController.getdailyEntry);
    app.post("/DailyEntry/api/v1/supplier/", [authJwt.verifyToken, authJwt.isAdmin, verifysupplierReqBody.validatesupplierRequestBody], cllientController.createdailyEntry);
    app.put("/DailyEntry/api/v1/supplier/:id", [authJwt.verifyToken, authJwt.isAdmin, verifysupplierReqBody.validatesupplierRequestBody], supplierController.updatesupplier);
    app.delete("/DailyEntry/api/v1/supplier/:id", [authJwt.verifyToken, authJwt.isAdmin], supplierController.deletesupplier);
}