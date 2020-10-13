const jwt = require("jsonwebtoken");
let COMPANY_JWT_SECRET_KEY = process.env.COMPANY_JWT_SECRET_KEY

function companyAuth(req, res, next) {
    //get the token from the header if present
    const token = req.headers["x-access-token"] || req.headers["authorization"];
    //if no token found, return error response (without going to the next middelware)
    if (!token) return res.status(401).send("Access denied. No token provided.");
  
    try {
      //if you can verify the token, set req.user and pass to next middleware
      const decoded = jwt.verify(token, COMPANY_JWT_SECRET_KEY);
      req.user = decoded;  
      next();
    } catch (ex) {
      //if invalid token
      res.status(400).send("Invalid token.");
    }
};

module.exports = companyAuth