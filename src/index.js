const express = require("express");
const router = require("./routes/router");
const app = express();
const port = 3000;

app.use("/api", router);

app.listen(port, () => {
  console.log(`${port} çalışıyor`);
});
