import { database } from "../database";
import { DataTypes } from 'sequelize';

const UrlModel = database.define("Url", {

    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    url: {
        type: DataTypes.STRING
    },
    short: {
        type: DataTypes.STRING
    }

});
export { UrlModel };