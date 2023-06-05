const express = require("express");
const http = require("http");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const initRoutes = require("./src/routes/index");
// const errorHandleMiddleware = require("./src/middlewares/error-handle.middleware");
// const ValidationError = require("./src/errors/validation.error");
// const NotFoundError = require("./src/errors/notfound.error");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

initRoutes(app);
//middleware handle errors
// app.use(errorHandleMiddleware);

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

//test Error Object
// const testError = new Error("loiiiii");
// console.log({ err: new NotFoundError("sadfasdf") });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongodb connected !");
    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log({ err });
    process.exit(1);
  });
