/**
 * Task: Add all common routes here like index or landing page, contact page, about me etc
 * - create 2 separate routes for user.js and product.js
 */
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json("I AM FROM BACKEND");
});

// get massive data from fakerjs for test
const { faker } = require("@faker-js/faker");

module.exports = router;
