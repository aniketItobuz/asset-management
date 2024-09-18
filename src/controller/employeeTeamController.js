import { employeeTeamModel } from "../models/employeeTeam.js";
import { employeeTeamZodSchema } from "../zod/zodSchema.js"

export const getAllEmployeeTeam = async (req, res) => {
  try {
    const empTeam = await employeeTeamModel.find();
    return res.json({
      data: empTeam,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addEmployeeTeam = async (req, res) => {
    const result = employeeTeamZodSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json(result.error.issues);
    }
    const empTeam = new employeeTeamModel(result.data);
  
    try {
      const b1 = await empTeam.save();
      res.json(b1);
    } catch (err) {
      res.status(500).send("Error: " + err);
    }
  };