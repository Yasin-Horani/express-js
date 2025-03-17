const express = require("express");
const path = require("path");
const app = express();
let psosts = [
  { id: 1, title: "First post" },
  { id: 2, title: "Second post" },
  { id: 3, title: "Third post" },
];

// get all posts
app.get("/api/posts", (req, res) => {
  res.json(psosts);
});

// get single posts
app.get("/api/posts/:id", (req, res) => {
  res.json(req.params);
});

//middleware : use static files
//app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
