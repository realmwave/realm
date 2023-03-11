import { Request, Response } from "express";
import mongoose from "mongoose";

import { Media, ProductionHouse } from "../../../models";


export default async function (req: Request, res: Response) {
  // data required
  /**
   * Banner (Homepage) { limit: 3 }
   * if user -> user's half watch history Media {limit: 20}
   * Trending {limit: 20}
  */
  
  try {
    const data = await Media.find()
    res.status(200).json({ error: 0, success: 1, response: data })
  } catch (error) {
    res.status(200).json({ error: 1, success: 0, response: error })
  }
  
};

