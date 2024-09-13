import mongoose from 'mongoose'

export const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_no: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },

})