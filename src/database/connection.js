import  Sequelize  from "sequelize";
import dateBaseConfig from '../config/database.js';
import Aluno from "../models/Aluno.js";

const models = [Aluno];

const connection = new Sequelize(dateBaseConfig);

models.forEach((model) => model.init(connection));