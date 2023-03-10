import express, { } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

import { HomeRouter } from "./routes";


dotenv.config({})

const PORT = process.env.PORT || 3333;
const MONGO_URI = process.env.MONGO_URI;

const app = express();


// middlewares
app.use(morgan('dev'));
app.use(express.json({ type: 'application/json' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: '*'
}));


// routes
app.use('/api', HomeRouter);


async function main() {
  await mongoose.connect(MONGO_URI as string)
  app.listen(PORT, () => {
    console.log("server is listening...")
  })
};


main();

