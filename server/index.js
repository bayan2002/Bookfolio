const app = require("./app");

const port = app.get("port");

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`The Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => console.log("Error on synchronizing db", error));
