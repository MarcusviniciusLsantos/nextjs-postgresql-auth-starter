import { Sequelize } from "sequelize";

import * as DatabaseConfig from "../config";
import User from "./user";


const Database = {};

const sequelize = new Sequelize(DatabaseConfig.database,
  DatabaseConfig.username,
  DatabaseConfig.password,
  DatabaseConfig);

Database.user = User;

Object.values(Database).forEach((model) => {
  if (model?.init) {
    model.init(sequelize);
  }
});

Object.values(Database).forEach((model) => {
  if (model?.associate) {
    model.associate(sequelize.models);
  }
});

Database.sequelize = sequelize;

export default Database;