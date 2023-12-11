import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";

import LipStickRouter from "./routes/lipStickRoute.js";

dotenv.config();
connectDB();
const Port = process.env.PORT || 4000;

mongoose.set("strictQuery", false);
connectDB();

const app = express();

app.listen(Port, () => {
  console.log(`server running on ${Port}`);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use(LipStickRouter);
