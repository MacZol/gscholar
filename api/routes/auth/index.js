const router = require("express").Router();
const AuthController = require("../../controllers/auth/index");
const authValidator = require("../../validation/auth/authValidator");
const helper = require("../../../utils/helper");

router.post(
  "/register",
  authValidator.validateRegisterInput,
  AuthController.register.Register
);

router.post(
  "/login",
  authValidator.validateLoginInput,
  AuthController.login.Login
);

router.post(
  "/forgot",
  authValidator.validateForgetPassword,
  AuthController.forgot.ForgotPW
);

router.post(
  "/reset",
  authValidator.validateResetPassword,
  AuthController.forgot.ResetPW
);

router.get("/verify", AuthController.register.VerifyCode);

router.post(
  "/change",
  helper.isLoggedIn,
  authValidator.validateChangePassword,
  AuthController.change.ChangePassword
);
module.exports = router;
