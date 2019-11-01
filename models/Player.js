const { Model, DataTypes } = require("sequelize");

class Player extends Model {
  static init(sequelize) {
    return super.init(
      {
        alias: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true
          }
        }
      },
      {
        sequelize,
        modelName: "player",
        underscored: true
      }
    );
  }

  static associate(models) {
    Player.hasMany(models.PhysicalCard);
    Player.hasMany(models.Deck);
  }
}

module.exports = Player;
