const mongoose = require("mongoose")
require("mongoose-double")(mongoose);
const Schema = mongoose.Schema;
const SchemaTypes = mongoose.Schema.Types;

const PhotoSchema = new Schema({
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  imageURL: {
      type: String,
      required: true,
  },
  coordinates: {
      lat: {
          type: SchemaTypes.Double,
          required: true,
      },
      lng: {
          type: SchemaTypes.Double,
          required: true,
      },
  },
  created: {
    type: Date,
    default: Date.now,
  },
  tags: [],
  favoriterIds: [],
});

module.exports = User = mongoose.model("Photo", PhotoSchema);