import z from "zod"

export const employeeZodSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email format"),
    phone_no: z.number().positive("Phone number must be a positive number"),
    team: z.string().min(1, "Team is required"),
    status: z.boolean().default(true),
});