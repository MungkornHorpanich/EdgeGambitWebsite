const mongoose = require("mongoose");
const { Schema } = mongoose;

const EmailSchema = new mongoose.Schema({
  email: String,
});

const EmailModel = mongoose.model("Email", EmailSchema);

module.exports = EmailModel;
