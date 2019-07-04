const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// db's data structure
const DataSchema = new Schema(
  {
    id: Number,
    message: String,
  },
  { timestamps: true }
);

// export the new Schema so it can by modified by Node.js
module.exports = mongoose.model('Data', DataSchema);
