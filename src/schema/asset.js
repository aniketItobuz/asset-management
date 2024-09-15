import mongoose from "mongoose";

export const assetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    assignee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      default: null,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    type: {
      type: String,
      required: true,
    },
    attachment: {
      type: String,
    },
    serial_no: {
      type: String,
      required: true,
    },
    Status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
