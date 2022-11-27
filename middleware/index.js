const verifySignUp = require("./verifySignUp");
const companyRoutes = require("./company.routes");
const clientRoutes = require("./client.routes");
const suplierRoutes = require("./supplier.routes")
const authJwt = require("./authjwt");


module.exports = (app) => {
    verifySignUp,
    companyRoutes,
    clientRoutes,
    suplierRoutes,
    authJwt
}
