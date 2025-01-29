const Joi = require("joi");

const validateRegistration = (data) => {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};

const validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};

const validateTask = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(1).max(100).required(),
    description: Joi.string().max(1000).allow("", null),
    status: Joi.string()
      .valid("todo", "in-progress", "review", "done")
      .required(),
  });
  return schema.validate(data);
};

console.log("Validation utility loaded");

module.exports = { validateRegistration, validateLogin, validateTask };
