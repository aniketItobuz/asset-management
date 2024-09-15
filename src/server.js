import express from "express";
import cors from 'cors';
import { connectToMongoDB } from "./connection/db.js";
import { config } from "./config/config.js";
import rootRouter from "./router/rootRouter.js";

connectToMongoDB();

const app = express();
const port = config.PORT;
app.use(express.json());

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173', // Allow your frontend domain
}));

app.use(rootRouter);

app.listen(port, () => {
  console.log(`Server started at ${port}...`);
});
