/**
 * This file will have all the logic to manipulate the User resource
 */
const { off } = require("../models/user.model");
const User = require("../models/user.model");
const objectConverter = require("../utils/objectConverter")
 
 
 
 /**
  * Fetch the list of all Users
  */
exports.findAllUsers = async (req, res) => {
 
     /**
     * Fetch the User documents from the users collection
     */
    try {
        const users = await User.find(mongoQueryObj);
 
        return res.status(200).send(objectConverter.userResponse(users));  // user password will also be returned in response
    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            message: "Internal error while fetching all users"
        })
    }
}
 
 /**
  * Fetch the user based on the userId
  */
 
exports.findUserById = async (req, res) => {
    const userIdReq = req.params.userId; //Reading from the request parameter
 
    const user = await User.find({ userId: userIdReq });
 
    if (user) {
         res.status(200).send(objectConverter.userResponse(user));
    } else {
        res.status(200).send({
            message: "User with id " + userIdReq + " doesn't exist"
        })
    }
}