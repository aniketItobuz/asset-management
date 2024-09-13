import { employeeModel } from "../models/employee.js";
import { employeeZodSchema } from "../zod/zodSchema.js"

export const getAllEmployees = async (req, res) =>{
    try {
        const emp = await employeeModel.find();
        return res.json({
          data: emp
        });
      } catch (err) {
        console.log(err);
    }
}


export const getEmployeeById = async (req, res) => {
    try {
        const emp = await employeeModel.findById(req.params.id)
        return res.json({
          data: emp
        });
      } catch (err) {
        console.log(err);
    }
}

export const addEmployee = async (req, res) => {
  const result = employeeZodSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json(result.error.issues);
  }
  const emp = new employeeModel(result.data);

  try {
    const a1 = await emp.save();
    res.json(a1)
  } catch (err) {
    res.status(500).send("Error: " + err);
  }
  
}

export const updateEmployee = async (req, res) => {
  try {
    const emp = await employeeModel.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        email: req.body.email,
        phone_no: req.body.phone_no,
        team: req.body.team
      },
      { new: true } // Return the updated document
    );
    if (!emp) {
      return res.status(404).send("Employee not found");
    }
    res.json(emp);
  } catch (err) {
    res.send("Error" + err);
  }
  
}

export const deleteEmployee = async (req, res) => {
  try {
    const emp = await employeeModel.findByIdAndDelete(req.params.id);
    res.send("Employee deleted");
  } catch (err) {
    res.send("Error" + err);
  }
}