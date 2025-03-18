import express from "express";
import {
  getPosts,
  getPost,
  addPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

let posts = [
  { id: 1, title: "First post" },
  { id: 2, title: "Second post" },
  { id: 3, title: "Third post" },
];

// get all posts
router.get("/", getPosts);

// get single posts
router.get("/:id", getPost);

// post posts
router.post("/", addPost);

// update posts
router.put("/:id", updatePost);

// delete posts
router.delete("/:id", deletePost);
export default router;
