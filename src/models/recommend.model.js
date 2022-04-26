const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: {
    type: String,
    ref: "Partner",
  },
  email: "string",
  idPartner: {
    type: String,
    ref: "Partner",
  },
  list: [{}],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});
const recommend = mongoose.model("Recommend", schema);
module.exports = recommend;
