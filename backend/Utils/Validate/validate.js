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
const taskStatuses = process.env.TASK_STATUSES.split(",");

const validateTask = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(1).max(100).required(),
    description: Joi.string().max(500).allow("", null),
    status: Joi.string()
      .valid(...taskStatuses)
      .required(),
  });
  return schema.validate(data);
};

const validateTaskStatus = (data) => {
  const schema = Joi.object({
    taskId: Joi.number().integer().required().messages({
      "any.required": "Task ID is required",
      "number.base": "Task ID must be a number",
    }),
    status: Joi.string()
      .valid(...taskStatuses)
      .required()
      .messages({
        "any.only": `Status must be one of: ${taskStatuses.join(", ")}`,
        "any.required": "Status is required",
      }),
  }).unknown(false);

  return schema.validate(data);
};

console.log("Validation utility loaded");

module.exports = {
  validateRegistration,
  validateLogin,
  validateTask,
  validateTaskStatus,
};
