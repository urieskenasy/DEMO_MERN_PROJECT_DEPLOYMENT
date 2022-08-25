const express = require("express");
const router = express.Router();
const User = require("../models/User");
// get massive data from fakerjs for test
const { faker } = require("@faker-js/faker");
// ## CONTROLLERS IMPORT ##
const {
    saveUserDataToDb,
    saveUserDataWithFakerAPI,
    userLogin,
} = require("../controllers/usersController");

// ## SAVE USER DATA TO DB ##
router.post("/user/create", saveUserDataToDb);

// ## SAVE USER TO DB WITH FAKER API DATA ##
// get Function because the data is coming from faker and not for user
router.get("/user/add", saveUserDataWithFakerAPI);

// LOGIN A USER
router.post("/user/login", userLogin);
module.exports = router;
