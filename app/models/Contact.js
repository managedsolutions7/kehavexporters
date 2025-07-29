import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide a first name."],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Please provide a last name."],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email."],
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    trim: true,
  },
  countryCode: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },
  message: {
    type: String,
    required: [true, "Please provide a message."],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);
