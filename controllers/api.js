const { validatePhoneNumber, checkNetwork } = require("../utils");

class ApiController {
  static home = (req, res) => {
    res.json({ message: "Welcome to Network API" });
  };

  static handleNumber = (req, res) => {
    const { phoneNumber } = req.params;
    const vMsg = validatePhoneNumber(phoneNumber);
    if (vMsg === "OK") {
      const network = checkNetwork(phoneNumber);
      res.json({ network });
    } else {
      res.status(400).json({ error: vMsg });
    }
  };
}

module.exports = ApiController;
