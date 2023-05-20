import mongoose from "mongoose";
import { NewsSchema } from "../models/newSchema";

export const NewsRepository = mongoose.model("news")