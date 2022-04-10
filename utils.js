const fs = require("fs");

const exts = JSON.parse(fs.readFileSync("./ext.json", { encoding: "utf-8" }));

class Utils {
  // validate phone number
  static validatePhoneNumber = (pn) => {
    let phoneNumber = pn.toString().trim();

    //Check if no value is passed
    if (!phoneNumber) {
      throw new Error("Phone number cannot be empty");
    }

    //Check if phone number contains unwanted characters
    if (phoneNumber.slice(0, 4) !== "+234" && phoneNumber.match(/[^0-9]/)) {
      throw new Error("Phone number contains invalid characters");
    }

    //Check if phone number is lesser than 11
    if (phoneNumber.length < 11) {
      throw new Error("Phone number must not be less than 11 digits");
    }

    //Check if phone number without +234 is greater than 11
    if (phoneNumber.length > 11 && phoneNumber.slice(0, 4) !== "+234") {
      throw new Error(
        "Phone number without +234 must not be greater than 11 digits"
      );
    }

    // Check if +234 phone number is less than 14 characters
    if (phoneNumber.length < 14 && phoneNumber.slice(0, 4) === "+234") {
      throw new Error("Phone number with +234 must be 14 characters long");
    }

    //Check if phone number with +234 is greater than 14 characters
    if (phoneNumber.length > 14 && phoneNumber.slice(0, 4) === "+234") {
      throw new Error(
        "Phone number with +234 must not be greater than 14 characters"
      );
    }

    if (phoneNumber.slice(0, 4) === "+234") {
      phoneNumber = `0${phoneNumber.slice(4, phoneNumber.length)}`;
    }
    return phoneNumber;
  };

  // check network
  static checkNetwork = (phoneNumber) => {
    const num = phoneNumber.slice(0, 4);
    if (exts.mtn.includes(num)) {
      return "mtn";
    } else if (exts.glo.includes(num)) {
      return "glo";
    } else if (exts.airtel.includes(num)) {
      return "airtel";
    } else if (exts.ninemobile.includes(num)) {
      return "9mobile";
    } else if (exts.starcomms.includes(num)) {
      return "starcomms";
    } else if (exts.visafone.includes(num)) {
      return "visafone";
    } else if (exts.multilinks.includes(num)) {
      return "multilinks";
    } else if (exts.zoom.includes(num)) {
      return "zoom";
    } else if (exts.ntel.includes(num)) {
      return "ntel";
    } else if (exts.smile.includes(num)) {
      return "smile";
    } else {
      return "Unknown";
    }
  };
}

module.exports = Utils;
