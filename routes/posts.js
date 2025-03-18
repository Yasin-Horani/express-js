import express from "express";
const router = express.Router();

let posts = [
  { id: 1, title: "First post" },
  { id: 2, title: "Second post" },
  { id: 3, title: "Third post" },
];

// get all posts
router.get("/", (req, res) => {
  res.json(posts);
});

// get single posts
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (post) {
    return res.status(200).json(post);
  } else {
    return res.status(404).send("Post not found 404");
  }
  res.json(posts.filter((post) => post.id === id));
});

// post posts
router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };
  if (!newPost)
    return res
      .status(404)
      .json({ message: `The Post ${req.body.title}  does not found` });
  posts.push(newPost);
  res.status(201).json(newPost);
});

// update posts
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (post) {
    post.title = req.body.title;
    res.status(200).json(post);
  } else {
    return res.status(404).send("Post not found 404");
  }
});

// delete posts
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (post) {
      posts = posts.filter((post) => post.id !== id);
      res.status(200).json(post);
    } else {
      return res.status(404).send("Post not found 404");
    }
  });
export default router;
