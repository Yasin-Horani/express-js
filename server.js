import express from "express";
import posts from "./routes/posts.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/api/posts", posts);
