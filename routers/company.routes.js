const companycontroller = require("../controllers/company.controller");
const { authJwt, verifycompanyReqBody } = require("../middlewares");



/**
 * Routes for the company resource
 */

module.exports = function (app) {
    app.get("/DailyEntry/api/v1/company", [authJwt.verifyToken], companyController.getAllcompany);
    app.get("/DailyEntry/api/v1/company/:id", [authJwt.verifyToken], companyController.getcompany);
    app.post("/DailyEntry/api/v1/company/", [authJwt.verifyToken, authJwt.isAdmin, verifycompanyReqBody.validatecompanyRequestBody], companyController.createcompany);
    app.put("/DailyEntry/api/v1/company/:id", [authJwt.verifyToken, authJwt.isAdmin, verifycompanyReqBody.validatecompanyRequestBody], companyController.updatecompany);
    app.delete("/DailyEntry/api/v1/company/:id", [authJwt.verifyToken, authJwt.isAdmin], companyController.deletecompany);
}