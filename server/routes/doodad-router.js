import express from 'express';

import * as doodads from '../controllers/doodad-controller.js';

const doodadRouter = express.Router();

doodadRouter.route('/')
  .get(doodads.getAll);

export { doodadRouter };