import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  age: number;
  city: string;
  country: string;
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    age: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IUser>("user", userSchema);
