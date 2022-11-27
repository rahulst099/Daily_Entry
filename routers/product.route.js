const Productcontroller = require("../controllers/Product.controller");
const { authJwt, verifyproductsReqBody } = require("../middlewares");



/**
 * Routes for the products resource
 */

module.exports = function (app) {
    app.get("/DailyEntry/api/v1/products", [authJwt.verifyToken], productsController.getAllproducts);
    app.get("/DailyEntry/api/v1/products/:id", [authJwt.verifyToken], productsController.getproducts);
    app.post("/DailyEntry/api/v1/products/", [authJwt.verifyToken, authJwt.isAdmin, verifyproductsReqBody.validateproductsRequestBody], productsController.createproducts);
    app.put("/DailyEntry/api/v1/products/:id", [authJwt.verifyToken, authJwt.isAdmin, verifyproductsReqBody.validateproductsRequestBody], productsController.updateproducts);
    app.delete("/DailyEntry/api/v1/products/:id", [authJwt.verifyToken, authJwt.isAdmin], productsController.deleteproducts);
}