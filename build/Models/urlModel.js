"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlModel = void 0;
const database_1 = require("../database");
const sequelize_1 = require("sequelize");
const UrlModel = database_1.database.define("Url", {
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    url: {
        type: sequelize_1.DataTypes.STRING
    },
    short: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.UrlModel = UrlModel;
