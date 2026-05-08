const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  let token;
  const authHeader = req.headers["authorization"]; // get Authorization header

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1]; // extract token after 'Bearer'
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User is not authorized, token failed or expired");
      }
      // save user data into req for next controller
      req.user = decoded.user;
      next();
    });
  } else {
    res.status(401);
    throw new Error("User is not authorized, no token");
  }
};

module.exports = validateToken;

