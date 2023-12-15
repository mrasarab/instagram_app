const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config()
const { logger } = require("../utils/logger");

const ACCESS_TOKEN = process.env.ACCESS_TOKEN
const signUser = async (req,res,next) => {
    email = req.body;
    const payload = { email: email };
    const accessToken = await jwt.sign(payload,ACCESS_TOKEN);
    logger.info(`new accessToken generated for user: ${email} the accessToken is ${accessToken}`);

    return res.cookie('accessToken',accessToken);


}


const decodeUser = async (req,res,next) => {
    const accessToken = res.cookie.accessToken

    const payload = jwt.decode(accessToken, ACCESS_TOKEN);
    
}