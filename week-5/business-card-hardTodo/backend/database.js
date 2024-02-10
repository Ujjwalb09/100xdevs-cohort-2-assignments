const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ujjwalbhatt09:Bhatt_2021@cluster0.e1a378i.mongodb.net/businessCard"
);

const cardSchema = new mongoose.Schema({
  name: String,
  description: String,
  interests: [String],
  socials: {
    LinkedIn: String,
    Twitter: String,
  },
});

const card = mongoose.model("cards", cardSchema);


module.exports = card;