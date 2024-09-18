import mongoose from 'mongoose';
import { assetModel } from "../models/asset.js";
import { assetHistoryModel } from "../models/assetAssign.js";

export const assetReturn = async (req, res) => {
  try {
    const { asset_id } = req.body;

    // Validate asset_id
    if (!mongoose.Types.ObjectId.isValid(asset_id)) {
      return res.status(400).json({ message: 'Invalid asset ID' });
    }

    // Find the asset
    const asset = await assetModel.findById(asset_id);
    if (!asset) {
      return res.status(404).json({ message: 'Asset not found' });
    }

    // Get the last history entry for the asset
    const lastHistoryEntry = await assetHistoryModel.findOne({ asset_id })
      .sort({ assigned_date: -1 }) // Get the most recent entry
      .exec();

    if (!lastHistoryEntry) {
      return res.status(404).json({ message: 'No assignment history found for this asset' });
    }

    // Check if the asset is currently assigned
    if (!lastHistoryEntry.current_assignee) {
      return res.status(400).json({ message: 'This asset is not currently assigned' });
    }

    // Create new history entry for the return
    const returnHistory = new assetHistoryModel({
      asset_id,
      previous_assignee: lastHistoryEntry.current_assignee,
      current_assignee: null, // The asset is being returned, so no current assignee
      assigned_date: lastHistoryEntry.assigned_date, // Preserve the original assignment date
      return_date: new Date(), // Set the return date to the current date
    });

    // Save the return history entry
    const savedReturnHistory = await returnHistory.save();

    // Optionally, update asset's assignee to null
    asset.assignee = null;
    await asset.save();

    res.status(200).json({
      message: 'Asset returned successfully',
      returnHistory: savedReturnHistory, // Return the saved history entry
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
