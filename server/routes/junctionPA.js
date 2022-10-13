import db from "../db/db-connection.js";
import Router from "express";

const router = Router();

//GET Request - Junction Table of Posts & Authors

router.get("/", async (req, res) => {
  try {
    const junctionPA = await db.any("SELECT posts.title, posts.post, posts.image, posts.dates, authors.name FROM posts, authors WHERE posts.id = authors.post_id");

    res.send(junctionPA);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

export default router;
