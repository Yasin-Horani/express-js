const express = require("express");
const path = require("path");
const app = express();
let posts = [
  { id: 1, title: "First post" },
  { id: 2, title: "Second post" },
  { id: 3, title: "Third post" },
];

// get all posts
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// get single posts
// filter the posts array and find the post with the id
app.get("/api/post/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(posts.filter((post) => post.id === id));
});

//middleware : use static files
//app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
