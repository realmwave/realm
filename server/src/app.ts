import express, { } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";


dotenv.config({})

const PORT = process.env.PORT || 3333;

const app = express();


// middlewares
app.use(morgan('dev'))



