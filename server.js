import express from "express";
import posts from "./routes/posts.js";
import path from "path";

const __dirname = path.resolve();
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/api/posts", posts);
