import { RequestHandler } from "express";
import UserSchema from "../models/User.model";

export const createUser: RequestHandler = async (_req, res) => {
  try {
    const allUsers = await UserSchema.find();
    res.json(allUsers);
  } catch (error) {
    console.log(error);
  }
};
