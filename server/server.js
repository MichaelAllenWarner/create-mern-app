import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';

import { doodadRouter } from './routes/doodad-router.js'; // EXAMPLE

import { connectToDb } from './db.js';

const app = express();

app.use(compression());
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/doodads', doodadRouter); // EXAMPLE

connectToDb();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});