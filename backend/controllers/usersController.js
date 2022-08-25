// ## REQUIRE User SCHEME FROM MODELS ##
const User = require("../models/Product");
// ## GET MASSIVE DATA FROM FAKER TO TEST ##
const { faker } = require("@faker-js/faker");

// ## SAVE USER DATA TO DB ##

const saveUserDataToDb = (req, res) => {
    // # req.body: body is the user data, request is the object that contain the body #
    console.log(req.body);
    // # save to DB and response back to Frontend. should be implemented according to User schema #
    new User(req.body).save(() => {
        console.log("data is saved");
        // # send message and userData #
        res.json("A user is Created");
    });
};

// ## SAVE USER TO DB WITH FAKER API DATA ##

const saveUserDataWithFakerAPI = (req, res) => {
    const userData = {
        username: faker.internet.userName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
    };
    new User(userData).save(() => {
        console.log("One user created from FAKER");
        // # send message and userData to Frontend #
        res.json("A user is Created FROM FAKER");
    });
};

// ## LOGIN A USER ##

const userLogin = (req, res) => {
    // # log the inputs from Frontend #
    console.log(req.body);

    // # check whether a user exist in DB or not: we use mongoDB commands to find a specific email and password. <<< Model.findOne({email: req.body.email, password: req.body.password}) >>> #
    User.findOne({ email: req.body.email, password: req.body.password }).then(
        (user) => {
            // LOGIN THE RESULT
            console.log(user);
            if (user != null) {
                req.userId = user._id;
                Product.find({ added_by: user._id }).then((products) => {
                    res.json({
                        user,
                        message: "SUCCESSFULY LOGGED IN",
                        products,
                    });
                });
            } else {
                res.json(
                    "WRONG DATA! PLEASE GIVE US CORRECT EMAIL AND PASSWORD :)"
                );
            }
        }
    );
};

// ## EXPORTING THE FUNCTIONS ##
module.exports = {
    saveUserDataToDb,
    saveUserDataWithFakerAPI,
    userLogin,
};
