import Sequelize from 'sequelize';
import Connection from '../database.js';
import User from './Usuario.js';

const Posts = Connection.define(
  'post',
  {
    id_post: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    titulo_post: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    descricao_post: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    imagem_post: {
      type: Sequelize.STRING(255),
    },
    id_usuario: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id', 
      },
    },
  },
  {
    timestamps: true,
    underscored: true,
  }
);

export default Posts;
