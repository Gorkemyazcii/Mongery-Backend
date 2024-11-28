const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors()); // CORS middleware'ini kullanın

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
