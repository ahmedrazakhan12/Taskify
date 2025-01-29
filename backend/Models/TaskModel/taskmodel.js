const { DataTypes } = require("sequelize");
const sequelize = require("../../Config/Database/database.js");

const TaskModel = sequelize.define(
  "Tasks",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.ENUM("todo", "in-progress", "review", "done"),
      defaultValue: "todo",
    },
  },
  {}
);

module.exports = { TaskModel };
