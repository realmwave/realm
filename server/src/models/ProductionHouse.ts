import mongoose, { Schema, Document, Types } from "mongoose";


export interface IProductionHouse extends Document {
  name: string;
  avatar: string;
  banner?: Types.Array<string>;  
  createdAt: Date;
  updatedAt: Date;
};

const ProductionHouse: Schema = new mongoose.Schema<IProductionHouse>({
  name: {
    type: String,
    minlength: 3,
    maxlength: 256,
    required: true,
  },
  avatar:{
    type: String,
    minlength: 16,
    maxlength: 2048,
    required: true,
  },
  banner: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});


export default mongoose.model("ProductionHouse", ProductionHouse);

