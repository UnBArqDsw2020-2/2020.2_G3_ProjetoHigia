const User = require("../models/User");
const Base = require("./Base");

class UserBase extends Base {
    constructor(){
        super(User);
    }
}

module.exports = UserBase;