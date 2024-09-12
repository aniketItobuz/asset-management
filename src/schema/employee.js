import mongoose from 'mongoose'

export const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone_no: {
        type: Number,
        require: true
    },
    team: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        require: true,
        default: true
    },

})