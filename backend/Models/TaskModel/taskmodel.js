require("dotenv").config(); // Ensure environment variables are loaded
const { DataTypes } = require("sequelize");
const sequelize = require("../../Config/Database/database.js");

// Load enum values from environment variables
const taskStatuses = process.env.TASK_STATUSES.split(",");

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
      type: DataTypes.ENUM(...taskStatuses),
      defaultValue: taskStatuses[0], // Use the first value as the default
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);

module.exports = { TaskModel };
