import { employeeModel } from "../models/employee.js";

export const getAllEmployees = async (req, res) =>{
    try {
        const emp = await employeeModel.find();
        return res.json({
          data: emp
        });
      } catch (err) {
        // res.send("Error" + err);
        console.log(err);
    }
}