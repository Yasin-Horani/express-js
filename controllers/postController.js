let posts = [
  { id: 1, title: "First post" },
  { id: 2, title: "Second post" },
  { id: 3, title: "Third post" },
];

// get all posts
export const getPosts = (req, res) => {
  res.json(posts);
};

// get single post
export const getPost = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ message: `The post with id ${id} was not found` });
  }

  res.status(200).json(post);
};

// Add post
export const addPost = (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ message: "Title is required" });
  }
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
};

// Update post
export const updatePost = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (post) {
    post.title = req.body.title;
    res.status(200).json(post);
  } else {
    return res.status(404).send("Post not found 404");
  }
};
