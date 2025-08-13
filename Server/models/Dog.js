import mongoose from "mongoose";

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  breed: {
    type: String,
  },
  age_estimate: {
    type: Number,
  },
  health_status: {
    type: String,
    enum: ["Healthy", "Injured"],
    default: "Healthy",
  },
  last_seen_location: {
    type: String,
  },
  photo_url: {
    type: String,
    default: "",
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Community",
    required: true,
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, { timestamps: true }); 

export const Dog = mongoose.model("Dog", DogSchema);
