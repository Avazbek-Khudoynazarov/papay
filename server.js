const dotenv = require("dotenv");
dotenv.config();
const http = require("http");
const mongodb = require("mongodb");

const connectionString = process.env.MONGO_URL;
mongodb.connect(
  connectionString,
  {
    useNewURLParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection mongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = process.env.PORT || 3003;
      server.listen(PORT, function () {
        console.log(
          `server is succesfully running: ${PORT},http://localhost:${PORT}`
        );
      });
    }
  }
);
