import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  seats: {
    type: Number,
    required: true
  },
  bags: {
    type: Number,
    required: true
  },
  features: {
    type: [String],
    required: true
  },
  rates: {
    type: {
      hourly: Number,
      daily: Number,
      weekly: Number
    },
    required: true
  },
  imageURL: {
    type: String,
    required: true
  }
});

export const Car = mongoose.model("Car", carSchema);
