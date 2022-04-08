const DefaultController = require("../controllers/default");

const router = require("express").Router();

router.get("/", DefaultController.home);

router.get("/:phoneNumber", DefaultController.handleNumber);

module.exports = router;
