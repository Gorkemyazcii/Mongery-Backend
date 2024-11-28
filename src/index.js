const express = require("express");
const router = require("./routes/router");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use("/api", router);

app.listen(port, () => {
  console.log(Sunucu ${port} portunda çalışıyor);
});
