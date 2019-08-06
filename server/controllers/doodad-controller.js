import { Doodad } from '../models/doodad-model.js';

const getAll = async(_req, res) => {
  try {
    const doodads = await Doodad.find(); // exec() ?
    // optional: disable browser caching (for legacy browsers that cache AJAX requests):
    // res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.send(doodads);
  } catch (err) {
    res.status(500).send(err);
  }
};

export { getAll };