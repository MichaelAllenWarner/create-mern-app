import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const DoodadSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const Doodad = model('Doodad', DoodadSchema);

export { Doodad };