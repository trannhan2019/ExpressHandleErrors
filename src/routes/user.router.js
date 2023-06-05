const router = require("express").Router();
const { body, param } = require("express-validator");
const userController = require("../controllers/user.controller");
const ValidateHandleMiddleware = require("../middlewares/validate-handle.middleware");

router.get(
  "/:id?",
  param("id").notEmpty().withMessage("param is required"),
  ValidateHandleMiddleware,
  userController.getUserById
);
router.post(
  "/",
  body("name").exists().isLength({ min: 3 }),
  body("sex").exists().isBoolean(),
  ValidateHandleMiddleware,
  userController.addUser
);

module.exports = router;
