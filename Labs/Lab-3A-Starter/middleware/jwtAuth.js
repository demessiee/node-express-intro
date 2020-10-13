const jwt = require("jsonwebtoken");
const jwtPrivateKey = "myprivatekey"

function jwtAuth(req, res, next) {
    //get the token from the header if present
    const token = req.headers["x-access-token"] || req.headers["authorization"];
    //if no token found, return error response (without going to the next middelware)
    if (!token) return res.status(401).send("Access denied. No token provided.");
  
    try {
      //if you can verify the token, set req.user and pass to next middleware
      const decoded = jwt.verify(token, jwtPrivateKey);
      req.user = decoded;  //req.user should have the username property we set when we signed and sent the JWT
      next();
    } catch (ex) {
      //if invalid token
      res.status(400).send("Invalid token.");
    }
};

module.exports = jwtAuth