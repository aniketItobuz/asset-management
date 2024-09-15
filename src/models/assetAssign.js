import mongoose from "mongoose";
import { assetHistorySchema } from "../schema/assetHistory.js";

export const assetHistoryModel = mongoose.model("AssetHistory", assetHistorySchema);