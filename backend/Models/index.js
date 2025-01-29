const { Sequelize } = require("sequelize");
const sequelize = require("../Config/Database/database.js"); // Adjust the path as necessary
const { UserModel } = require("./UserModel/usermodel.js");
const { TaskModel } = require("./TaskModel/taskmodel.js");

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.UserModel = UserModel;
db.TaskModel = TaskModel;

module.exports = db;
