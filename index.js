const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
  console.log(`Servidor Funcionando`);
  console.log(`http://localhost:3000/`);
});
