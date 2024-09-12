import mongoose from 'mongoose'

export const hardwareSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    serial_no: {
        type: String,
        require: true
    },
    assignee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        require: true
    },
})