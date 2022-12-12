// Load environment variables from .env file, where API keys and passwords are configured
require("dotenv").config();

//Load database
require("./database")

//Load telegram 
require("./services/telegram");

const app = require("./app");

// Start Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

