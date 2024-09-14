import mongoose from "mongoose";
import { assetSchema } from "../schema/asset.js";

export const assetModel = mongoose.model("Asset", assetSchema);