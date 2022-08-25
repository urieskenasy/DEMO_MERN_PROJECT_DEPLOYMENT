const express = require("express");
const router = express.Router();

// CONTROLLERS IMPORT
const {
    addOrCreateProduct,
    findProductById,
    getAllProducts,
    getAllProductsById,
    saveProductBySpecificUserId,
} = require("../controllers/productsController");

// Product Routes to add or create product
router.get("/products/add/:userid", addOrCreateProduct);

// how to check the amount of products added by a specific id
router.get("/productByUser/:productId", findProductById);

// GET ALL PRODUCTS
router.get("/all_products", getAllProducts);

// ## GET ALL PRODUCTS BY ID ##
router.get("/product/all/:userId", getAllProductsById);

// ## ADD PRODUCT BY SPECIFIC USER ID
router.post("/add/customized/:userId", saveProductBySpecificUserId);

//
module.exports = router;
//
//
//
//
//
//
//

/***
//  * task 1: display all products from database
//  * result: 7products according to Arif
//  */

// router.get("/product/all", (req, res) => {
//     Product.find({ added_by: user }).then((products) => {
//         console.log(products);
//         res.json(products);
//     });
// });
