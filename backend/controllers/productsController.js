// ## REQUIRE Product SCHEME FROM MODELS ##
const Product = require("../models/Product");
// ## GET MASSIVE DATA FROM FAKER TO TEST ##
const { faker } = require("@faker-js/faker");

// ## ADD AND CREATE A PRODUCT ##

const addOrCreateProduct = (req, res) => {
    const userId = req.params.userid;
    const productData = {
        product_title: faker.commerce.product(),
        price: faker.commerce.price(),
        quantity: faker.datatype.number(),
        created_at: Date.now(),
        // how login can get user info or id -- ?
        added_by: userId,
    };
    new Product(productData).save(() => {
        res.json("ONE PRODUCT IS ADDED");
    });
};

// ## FIND ONE PRODUCT BASED ON ID ##

const findProductById = (req, res) => {
    Product.findById(req.params.productId)
        .populate("added_by")
        .then((data) => {
            res.json(data);
        });
};

// ## GET ALL PRODUCTS FROM DB ##

const getAllProducts = (req, res) => {
    // all the products
    Product.find().then((data) => {
        res.json(data);
    });
};

// ## GET ALL PRODUCTS BY ID ##

const getAllProductsById = (req, res) => {
    // # get the user id with params. should match with route
    const user = req.params.userId;
    Product.find({ added_by: user }).then((products) => {
        // console.log(products);
        res.json(products);
    });
};

// ## ADD PRODUCT BY SPECIFIC USER ID ( user id from Frontend )

const saveProductBySpecificUserId = (req, res) => {
    const userId = req.params.userId;
    const productData = req.body;

    productData.added_by = userId;
    console.log(productData);
    new Product(productData).save(() => {
        console.log("One new Product created ");
        res.json("One Customized product has been added");
    });
};

// ## EXPORTING THE FUNCTIONS ##
module.exports = {
    addOrCreateProduct,
    findProductById,
    getAllProducts,
    getAllProductsById,
    saveProductBySpecificUserId,
};
