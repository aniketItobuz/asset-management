import mongoose from "mongoose";
import { faker } from '@faker-js/faker';

// Connect to your MongoDB instance
mongoose.connect('mongodb+srv://aniket:Itobuz1234@test-pro-db.xpg1d.mongodb.net/?retryWrites=true&w=majority&appName=test-pro-db', { useNewUrlParser: true, useUnifiedTopology: true });

// Define your schema and model
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone_no: {
      type: String,
      required: true,
    },
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EmployeeTeam",
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const User = mongoose.model("Employee", UserSchema);

// Generate dynamic seed data using faker
const generateSeedData = () => {
  const users = [];
  for (let i = 0; i < 100; i++) { // Generate 10 random users
    users.push({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone_no: faker.phone.number(),
      team: '66ea9c0ea497833e408bdd5e',
      status: faker.datatype.boolean(),
    });
  }
  return users;
};

// Insert seed data
async function seedDB() {
  const seedData = generateSeedData();
  await User.insertMany(seedData);
  console.log('Database seeded with faker data!');
  mongoose.connection.close();
}

seedDB();
