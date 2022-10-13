import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
config();

//ROUTES
import db from './db/db-connection.js';
import postsRouter from './routes/posts.js';
import junctionPARouter from './routes/junctionPA.js';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use('/posts', (postsRouter));
app.use('/junctionPA', (junctionPARouter));

app.get('/', (req, res) => {
  res.json('This is the backend.');
});

app.listen(PORT, () => (`Server is running on PORT: ${PORT}.`));