const User = require("../models/User");
const Base = require("./Base");

class MedicalReport extends Base {
    constructor(){
        super(User);
    }
}

module.exports = MedicalReport;