import { assetModel } from "../models/asset.js";
import { assetHistoryModel } from "../models/assetAssign.js";

export const assetAssign = async (req, res) => {
  try {
    const { asset_id, new_assignee_id } = req.body;

    // Find the asset
    const asset = await assetModel.findById(asset_id);
    if (!asset) {
      return res.status(404).json({ message: "Asset not found" });
    }

    // Get the latest history entry for this asset
    const lastHistoryEntry = await assetHistoryModel
      .findOne({ asset_id })
      .sort({ assigned_date: -1 }) // Get the most recent entry
      .exec();

    // Determine the previous and current assignee
    const previous_assignee = lastHistoryEntry
      ? lastHistoryEntry.current_assignee
      : null;
    const current_assignee = asset.assignee || null; // Fetch the current assignee from the asset itself

    // Check if the asset is being assigned to the same person
    if (current_assignee && current_assignee.toString() === new_assignee_id) {
      return res
        .status(400)
        .json({ message: "This asset is already assigned to this person" });
    }

    // Create a new history entry for the assignment
    const history = new assetHistoryModel({
      asset_id,
      previous_assignee,
      current_assignee: new_assignee_id,
      assigned_date: new Date(), // Set the assigned date to now
    });

    // Save the new history entry
    await history.save();

    // Update the asset's current assignee
    asset.assignee = new_assignee_id;
    await asset.save();

    res.status(200).json({ message: "Asset assigned successfully", history });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const assetHistory = async (req, res) => {
  try {
    const { asset_id } = req.params;

    // Fetch history of the asset
    const history = await assetHistoryModel.find({ asset_id })
      .populate('previous_assignee', 'name email')
      .populate('current_assignee', 'name email')
      .exec();

    // Process the history to ensure previous_assignee is handled correctly
    const processedHistory = history.map((entry, index, arr) => {
      // If the current_assignee is null, retain the previous_assignee from the previous entry
      if (!entry.current_assignee && index > 0) {
        entry.previous_assignee = arr[index - 1].current_assignee;
      } else if (entry.current_assignee && (!arr[index - 1] || !arr[index - 1].current_assignee)) {
        // If it's a new assignment (not reassignment), set previous_assignee to null
        entry.previous_assignee = null;
      }
      return entry;
    });

    res.status(200).json({ data: processedHistory });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


