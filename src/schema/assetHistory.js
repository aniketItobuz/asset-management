import mongoose from "mongoose";

export const assetHistorySchema = new mongoose.Schema({
  asset_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Asset',
    required: true,
  },
  previous_assignee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    default: null,
  },
  current_assignee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
  },
  assigned_date: {
    type: Date,
    default: Date.now,
  },
  return_date: {
    type: Date,
  },
});
