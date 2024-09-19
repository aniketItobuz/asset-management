import 'dotenv/config';
 const config = {
    PORT: 3000,
    DB_URI: "mongodb+srv://aniket:Itobuz1234@test-pro-db.xpg1d.mongodb.net/?retryWrites=true&w=majority&appName=test-pro-db",
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRY: process.env.JWT_EXPIRY,
}
export default config;