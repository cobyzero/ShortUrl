import { Sequelize } from "sequelize";

export const database = new Sequelize({

    host: "localhost",
    username: "root",
    password: "",
    database: "ShortUrl",
    dialect: "mysql"
});