import db from "../db/db-connection.js";
import Router from "express";

const router = Router();

// GET Request - Authors
router.get("/", async (req, res) => {
  try {
    const authors = await db.any('SELECT * FROM authors ORDER BY id ASC', [true]);
    res.send(authors);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

// POST Request - Authors
router.post('/', async (req, res) => {
  const posts = {
    name: req.body.name,
    post_id: req.body.post_id
  };
  console.log([posts.name, posts.post_id]);

  try {
    const createdAuthor = await db.one(
      'INSERT INTO authors(name, post_id) VALUES($1, $2) RETURNING *',
      [posts.name, posts.post_id],
    );
    console.log(createdAuthor);
    res.send(createdAuthor);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//DELETE Request - Authors
router.delete("/:id", async (req, res) => {
  // : acts as a placeholder
  const authorsId = req.params.id;
  try {
    await db.none("DELETE FROM authors WHERE id=$1", [authorsId]);
    res.send({ status: "success" });
  } catch (e) {
    return res.status(400).json({ e });
  }
});

export default router;