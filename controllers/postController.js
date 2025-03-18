let posts = [
  { id: 1, title: "First post" },
  { id: 2, title: "Second post" },
  { id: 3, title: "Third post" },
];

export const getPosts = (req, res) => {
  res.json(posts);
};

export const getPost = (req, res) => {
  (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (post) {
      return res.status(200).json(post);
    } else {
      return res.status(404).send("Post not found 404");
    }
    res.json(posts.filter((post) => post.id === id));
  };
};
