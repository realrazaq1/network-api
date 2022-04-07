const ApiController = require("../controllers/api");

const router = require("express").Router();

router.get("/", ApiController.home);

router.get("/:phoneNumber", ApiController.handleNumber);

module.exports = router;
