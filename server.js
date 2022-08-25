const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// ## Add .env config() to get the hidden data
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/user");
const productsRouter = require("./routes/product");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// ## add cors settings here to remove cors authentication problem. use cors before routes! ##
app.use(cors());

// ## CONNECT TO DB ##
mongoose
    .connect(process.env.DB)
    .then(() => {
        console.log("my database is connected");
    })
    .catch((error) => console.log("MY DATA BASE ISNT CONNECTED", error));

// ## API ROUTES SETUP ##
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

// ## LISTEN TO SERVER ##
app.listen(PORT, () => {
    console.log(`The Server is running Successfully in ${PORT} .....`);
});
