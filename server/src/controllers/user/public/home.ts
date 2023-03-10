import { Request, Response } from "express";


export default async function (req: Request, res: Response) {
  res.status(200).json({error: 0, success: 1})
};

