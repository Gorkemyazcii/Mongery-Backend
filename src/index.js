const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors()); // CORS middleware'ini kullanın

// Diğer route'larınız burada
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
