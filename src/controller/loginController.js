import { employeeModel } from "../models/employee.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Ensure this is defined

export const getLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await employeeModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password); // Use user.password here
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

        // Respond with token and user details
        res.json({
            token,
            user: { // Change 'employeeModel' to 'user'
                _id: user._id,
                name: user.name,
                email: user.email,
                phone_no: user.phone_no,
                team: user.team,
                status: user.status
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
