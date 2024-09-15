import { assetModel } from "../models/asset.js";
import { assetHistoryModel } from "../models/assetAssign.js"

export const assetAssign = async (req, res) => {
  try {
    const { asset_id, new_assignee_id } = req.body;

    // Find the asset
    const asset = await assetModel.findById(asset_id);
    if (!asset) {
      return res.status(404).json({ message: 'Asset not found' });
    }

    // Get the previous assignee from the asset history
    const lastHistoryEntry = await assetHistoryModel.findOne({ asset_id })
      .sort({ assigned_date: -1 }) // Get the most recent entry
      .exec();

    const previous_assignee = lastHistoryEntry ? lastHistoryEntry.current_assignee : null;

    // Create new history entry
    const history = new assetHistoryModel({
      asset_id,
      previous_assignee,
      current_assignee: new_assignee_id,
    });

    // Save the new history entry
    await history.save();

    // Optionally, update asset's current assignee (if required)
    asset.assignee = new_assignee_id;
    await asset.save();

    res.status(200).json({ message: 'Asset assigned successfully', history });
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

    res.status(200).json({ data: history });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


