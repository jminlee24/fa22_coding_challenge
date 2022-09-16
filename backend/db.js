const mongoose = require("mongoose");
const login = require("./config.json");

const uri = `mongodb+srv://${login.user}:${login.password}@fa22.glhrilc.mongodb.net/?retryWrites=true&w=majority`;

module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      dbName: "FA22DB",
    };
    await mongoose.connect(
      /* CREATE & CONNECT TO YOUR OWN MONGODB DATABASE */
      uri,
      connectionParams
    );
    console.log("Connected to MongoDB");
    console.log(mongoose.Collection);
  } catch (error) {
    console.log("Could not connect to database", error);
  }
};
