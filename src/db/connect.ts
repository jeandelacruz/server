import { Sequelize } from "sequelize-typescript";

// Models
import model from "./models";

let connection: any;
try {
  connection = new Sequelize(process.env.SEQUELIZE_URL, {
    define: {
      freezeTableName: true,
      timestamps: false
    },
    logging: false,
    models: [
      model.Character,
      model.AccountCharacter,
      model.MEMB_STAT,
      model.MEMB_INFO,
      model.Nyx_Config,
      model.Guild,
      model.GuildMember
    ]
  });

  console.log("Database connected...");
} catch (error) {
  console.log("Database failed to connect...");
}

export default connection;
