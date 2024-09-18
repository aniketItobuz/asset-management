import mongoose from "mongoose";
import { assetType } from "../schema/assetType.js";

export const assetTypeModel = mongoose.model("AssetType", assetType);