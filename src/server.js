const app = require("./app");
const bot = require("./services/telegram");

// Start Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
