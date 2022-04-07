const fs = require("fs");

const exts = JSON.parse(fs.readFileSync("./ext.json", { encoding: "utf-8" }));

class Utils {
  // validate phone number
  static validatePhoneNumber = (phoneNumber) => {
    if (phoneNumber.length < 11) {
      return "Phone number is less than 11 digits";
    } else if (phoneNumber.length > 11) {
      return "Phone number is more than 11 digits";
    } else {
      return "OK";
    }
  };

  // check network
  static checkNetwork = (phoneNumber) => {
    const num = phoneNumber.slice(0, 4);
    if (exts.mtn.includes(num)) {
      return "MTN";
    } else if (exts.glo.includes(num)) {
      return "GLO";
    } else if (exts.airtel.includes(num)) {
      return "AIRTEL";
    } else if (exts.ninemobile.includes(num)) {
      return "9MOBILE";
    } else {
      return "UNKNOWN";
    }
  };
}

module.exports = Utils;
