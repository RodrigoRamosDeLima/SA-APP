import Sequelize from 'sequelize';
import Connection from '../database.js';

const Usuario = Connection.define(
  'admin',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    maiorDeIdade: {
      type: Sequelize.BOOLEAN,
      defaultValue: false, 
    },
  }
);

export default Usuario;
