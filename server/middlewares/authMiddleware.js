const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).send({
        message: "authorization failed",
        success: false,
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userid = decoded.userid;
    next();
  } catch {
    return res.status(401).send({
      message: "authorization failed",
      success: false,
    });
  }
};
