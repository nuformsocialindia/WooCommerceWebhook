const app = require("./app");

//Load telegram 
require("./services/telegram");

//Load database
require("./database")

// Start Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

