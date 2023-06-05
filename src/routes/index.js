const userRouter = require("./user.router");
const errorHandleMiddleware = require("../middlewares/error-handle.middleware");

const initRoutes = (app) => {
  app.use("/api/user", userRouter);

  //middleware handle errors
  app.use(errorHandleMiddleware);
};

module.exports = initRoutes;
