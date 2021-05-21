const router = require("express").Router();
const AccountController = require("../../controllers/account/index");
const helper = require("../../../utils/helper");
const {
  updateProfileInput,
} = require("../../validation/account/accountValidator");

router.get(
  "/articles",
  helper.isLoggedIn,
  AccountController.articles.GetAllArticles
);
router
  .route("/alerts")
  .get(helper.isLoggedIn, AccountController.alert.GetAllAlerts)
  .post(helper.isLoggedIn, AccountController.alert.Create);

router
  .route("/alert/:id")
  .patch(helper.isLoggedIn, AccountController.alert.Update)
  .delete(helper.isLoggedIn, AccountController.alert.Delete)
  .get(helper.isLoggedIn, AccountController.alert.getAlert);

router
  .route("/information")
  .get(helper.isLoggedIn, AccountController.information.GetInformation);

router.get(
  "/information/daily",
  helper.isLoggedIn,
  AccountController.information.SendDailyGraphicalInformation
);
router.get(
  "/information/monthly",
  helper.isLoggedIn,
  AccountController.information.SendMonthlyGraphicalInformation
);

router
  .route("/profile")
  .patch(
    helper.isLoggedIn,
    updateProfileInput,
    AccountController.profile.UpdateProfile
  )
  .get(helper.isLoggedIn, AccountController.profile.GetProfile);

router.get(
  "/messages",
  helper.isLoggedIn,
  AccountController.messages.GetAllMessages
);
router.get(
  "/message/:id",
  helper.isLoggedIn,
  AccountController.messages.GetOneMessage
);
module.exports = router;
