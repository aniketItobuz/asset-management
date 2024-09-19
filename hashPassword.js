import bcrypt from 'bcryptjs';

// Function to hash a password
const hashPassword = async (plainPassword) => {
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Hash the password
    const hashedPassword = await bcrypt.hash(plainPassword, salt);
    console.log(`Original Password: ${plainPassword}`);
    console.log(`Hashed Password: ${hashedPassword}`);
  } catch (error) {
    console.error('Error hashing password:', error);
  }
};

// Example usage
const plainPassword = 'Itobuz#1234';
hashPassword(plainPassword);
