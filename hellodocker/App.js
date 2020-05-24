const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello Fellow HRNYC-29 People!"));

app.listen(port, () =>
  console.log(`Hello Docker listening at http://localhost:${port}`)
);
