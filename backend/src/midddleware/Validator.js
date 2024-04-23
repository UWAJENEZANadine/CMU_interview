import { check, validationResult } from "express-validator";
class Validator {
  static ValidatorInput = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.errors.map((err) => err.msg);
      return res.status(400).json({ message: errorMessage });
    }
    return next();
  };
  static newAccountRules() {
    return [
      check("email", "email is invalid").isEmail(),
      check("password", "password is not strong").isStrongPassword(),
      check("name", "last Name should be valid").isAlpha(),
      check("phone", "Your phone number iis invalid").isMobilePhone,
    ];
  }
}
export default Validator;
