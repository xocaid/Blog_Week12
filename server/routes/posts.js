import db from "../db/db-connection.js";
import Router from "express";

const router = Router();

// GET Request - Posts 
router.get("/", async (req, res) => {
  try {
    const posts = await db.any('SELECT * FROM posts ORDER BY title ASC', [true]);
    res.send(posts);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

// POST Request - Posts
router.post('/', async (req, res) => {
  const posts = {
    title: req.body.title,
    post: req.body.post,
    dates: req.body.dates
  };
  console.log([posts.title, posts.post, posts.dates]);

  try {
    const createdPost = await db.one(
      'INSERT INTO posts(title, post, dates) VALUES($1, $2, $3) RETURNING *',
      [posts.title, posts.post, posts.dates],
    );
    console.log(createdPost);
    res.send(createdPost);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//DELETE Request - Posts
router.delete("/:id", async (req, res) => {
  // : acts as a placeholder
  const postsId = req.params.id;
  try {
    await db.none("DELETE FROM posts WHERE id=$1", [postsId]);
    res.send({ status: "success" });
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//GET Request - Posts DUMMY DATA
// router.get("/", async (req, res) => {
//   try {
//     const posts = 
//       [
//         {"id":1,"post":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.","date":"error: undefined method `id' for nil:NilClass","image":"http://dummyimage.com/132x100.png/dddddd/000000","author":"Ransom Cotterel","title":"Dorado, El"},
//       {"id":2,"post":"In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.","date":"error: undefined method `id' for nil:NilClass","image":"http://dummyimage.com/130x100.png/cc0000/ffffff","author":"Rozalie Bulfoot","title":"Vääpeli Körmy ja marsalkan sauva"},
//       {"id":3,"post":"Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.","date":"error: undefined method `id' for nil:NilClass","image":"http://dummyimage.com/193x100.png/5fa2dd/ffffff","author":"Michaelina Glowacz","title":"Flaming Star"},
//       {"id":4,"post":"Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.","date":"error: undefined method `id' for nil:NilClass","image":"http://dummyimage.com/162x100.png/ff4444/ffffff","author":"Nikki Coners","title":"Swordfish"},
//       {"id":5,"post":"Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.","date":"error: undefined method `id' for nil:NilClass","image":"http://dummyimage.com/177x100.png/cc0000/ffffff","author":"Aldus Shevelin","title":"Mr. Nanny"},
//       {"id":6,"post":"Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.","date":"error: undefined method `id' for nil:NilClass","image":"http://dummyimage.com/132x100.png/cc0000/ffffff","author":"Jami Earp","title":"Molière"},
//       {"id":7,"post":"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.","date":"error: undefined method `id' for nil:NilClass","image":"http://dummyimage.com/179x100.png/dddddd/000000","author":"Glyn Shillabeare","title":"Dragon Ball Z: The History of Trunks (Doragon bôru Z: Zetsubô e no hankô!! Nokosareta chô senshi - Gohan to Torankusu)"},
//       {"id":8,"post":"Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.","date":"error: undefined method `id' for nil:NilClass","image":"http://dummyimage.com/234x100.png/dddddd/000000","author":"Marget Curnock","title":"This Property is Condemned"},
//       {"id":9,"post":"Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.","date":"error: undefined method `id' for nil:NilClass","image":"http://dummyimage.com/109x100.png/ff4444/ffffff","author":"Mandy Costello","title":"Fatso"},
//       {"id":10,"post":"Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.","date":"error: undefined method `id' for nil:NilClass","image":"http://dummyimage.com/140x100.png/dddddd/000000","author":"Arnold Giercke","title":"The Burglar"}
//     ];
//     res.send(posts);
//   } catch (e) {
//     return res.status(400).json({ e });
//   }
// });



export default router;