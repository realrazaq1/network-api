const { validatePhoneNumber, checkNetwork } = require("../utils");

class DefaultController {
  static home = (req, res) => {
    res.json({ message: "Welcome to Network API" });
  };

  static handleNumber = (req, res) => {
    const { phoneNumber } = req.params;
    try {
      const validPN = validatePhoneNumber(phoneNumber);
      console.log(validPN);
      const network = checkNetwork(validPN);
      res.json({ network });
    } catch (err) {
      console.log(err.message);
      res.status(400).json({ error: err.message });
    }
  };
}

module.exports = DefaultController;
