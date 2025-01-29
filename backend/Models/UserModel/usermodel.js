const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../Config/Database/database"); // Ensure correct path

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Users", // Ensure table name matches the DB
    timestamps: true, // Remove if using createdAt/updatedAt
  }
);

module.exports = User;
