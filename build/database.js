"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const sequelize_1 = require("sequelize");
exports.database = new sequelize_1.Sequelize({
    host: "localhost",
    username: "root",
    password: "",
    database: "ShortUrl",
    dialect: "mysql"
});
