const app = require("./app");

const port = app.get("port");

app.listen(port, () => {
  console.log(`The Server is running on http://localhost:${port}`);
});
