import mongoose from "mongoose";

const InjuryReportSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  photo_url: {
    type: String,
    default: "", 
  },
  status: {
    type: String,
    enum: ["Pending", "Rescued", "Treated"],
    default: "Pending",
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Community",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, { timestamps: true });

export const InjuryReport = mongoose.model("InjuryReport", InjuryReportSchema);
