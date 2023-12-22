const { body } = require("express-validator");

const userValidationRules = () => {
  return [
    // Name should not be empty
    body("name").not().isEmpty().withMessage("Name is required"),

    // Email should be valid and not empty
    body("email").isEmail().withMessage("Enter a valid email address"),

    // Password strong policy
    body("password")
      .isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
      .withMessage(
        "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one number, and one symbol"
      ),
  ];
};

module.exports = {
  userValidationRules,
};
