const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");

/***************************
 *        REST API         *
 ***************************/

//member dahildor routers
router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);
router.get("/check-me", memberController.checkMyAuthentication);

//other routers
router.get("/menu", (req, res) => {
  res.send("Menu sahifadasiz");
});
router.get("/community", (req, res) => {
  res.send("Jamiyat sahifadasiz");
});

module.exports = router;
