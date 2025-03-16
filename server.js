const express = require("express");
const path = require("path");
const app = express();

//middleware : use static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
