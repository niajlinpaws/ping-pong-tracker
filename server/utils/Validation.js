const Validator = require('validatorjs');

module.exports = (rules) => (req, res, next) => {
  const validation = new Validator(
    req.body,
    rules,
  );

  if (validation.fails()) {
    const error = validation.errors.all();
    return res.status(422).json({
      data: {},
      message: error[Object.keys(error)[0]][0],
    });
  }
  return next();
};
