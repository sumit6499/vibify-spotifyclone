const express = require("express");
const path = require("path");
const app = express();

const _dirname = path.dirname("");
const staticPath = path.join(_dirname, "../client/dist");
console.log(staticPath);

app.use(express.static(staticPath));

app.get("/*", (req, res) => {
});

app.listen(3000, () => {
  console.log("server running");
});
