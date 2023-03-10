import mongoose, { Schema, Document, Types } from "mongoose";


export interface IProductionHouse extends Document {
  avatar: string;
  banner?: Types.Array<string>;  
  createdAt: Date;
  updatedAt: Date;
};

const ProductionHouse: Schema = new mongoose.Schema<IProductionHouse>({
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

