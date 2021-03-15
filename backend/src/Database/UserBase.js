import User from "../models/User";
import Base from "./Base";

class UserBase extends Base {
    constructor(collectionType){
        super(collectionType)
    }
}

export default new UserBase(User);