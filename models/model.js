import Sequelize, { DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize('postgres:///demo_db');
// const sequelize = new Sequelize('postgresql://postgres:postgres@localhost:5432/demo_db');

class Thing extends Model {}

Thing.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'things',
    sequelize: sequelize,
    timestamps: false,
  }
);

export { sequelize, Thing };
