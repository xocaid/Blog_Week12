import db from "../db/db-connection.js";
import Router from "express";

const router = Router();

//GET Request - Posts
router.get("/", async (req, res) => {
  try {
    const posts = [
      {'ID': 1, 'Text':'Doing well today', 'username': 'adam', 'time': 'several minutes ago'},
      {'ID': 2, 'Text':'Got sushi tonight','username': 'adam', 'time': 'several minutes ago'}, 
      {'ID': 3, 'Text':'Got a turtle', 'username': 'adam', 'time': 'several minutes ago'}, 
      {'ID': 4, 'Text':'Went rock climbing', 'username': 'adam', 'time': 'several minutes ago'}, 
      {'ID': 5, 'Text':'did some sewing today', 'username': 'adam', 'time': 'several minutes ago'}
    ];
    res.send(posts);
  } catch (e) {
    return res.status(400).json({ e });
  }
});



export default router;