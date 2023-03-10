import mongoose, { Schema, Document, Types } from "mongoose";
import { IProductionHouse } from "./ProductionHouse";


export interface ICasts extends Document {
  image: string;
  name: string;
  stageName: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface IEpisodes extends Document {
  mediaUrl: string;
  title: string;
  thumbnail: string;
  duration: string;
  casts: Types.Array<ICasts>;
  createdAt: Date;
  updatedAt: Date;
};

export interface ISeasons extends Document {
  season: number;
  banner: Types.Array<string>;
  title: string;
  episodes: Types.Array<IEpisodes>;
  createdAt: Date;
  updatedAt: Date;
};

export interface IMedia extends Document {
  thumbnails: Types.Array<string>;
  mediaType: "movie" | "series";
  genre: Types.Array<string>;
  productionHouse: IProductionHouse["_id"];
  mediaUrl?: string;
  seasons?: string;
  duration?: string;
  createdAt: Date;
  updatedAt: Date;
};

const CastSchema: Schema = new mongoose.Schema<ICasts>({
  image: {
    type: String,
    minlength: 3,
    maxlength: 2048,
    required: true,
  },
  name: {
    type: String,
    minlength: 3,
    maxlength: 256,
    required: true,
  },
  stageName: {
    type: String,
    minlength: 3,
    maxlength: 256,
    required: true,
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

const EpisodeSchema: Schema = new mongoose.Schema<IEpisodes>({
  mediaUrl: {
    type: String,
    minlength: 3,
    maxlength: 2048,
    required: true,
  },
  title: {
    type: String,
    minlength: 1,
    maxlength: 256,
    required: true,
  },
  thumbnail: {
    type: String,
    minlength: 3,
    maxlength: 2048,
    required: true,
  },
  duration: {
    type: String,
    minlength: 3,
    maxlength: 128,
    required: true,
  },
  casts: {
    type: [CastSchema],
    required: true,
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

const SeasonSchema: Schema = new mongoose.Schema<ISeasons>({
  season: {
    type: Number,
    min: 1,
    required: true,
  },
  banner: {
    type: [String],
    required: true,
  },
  title: {
    type: String,
    minlength: 1,
    maxlength: 256,
  },
  episodes: {
    type: [EpisodeSchema],
    required: true,
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

const MediaSchema: Schema = new mongoose.Schema<IMedia>({
  thumbnails: {
    type: [String],
    required: true,
  },
  mediaType: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
  productionHouse: {
    type: mongoose.Types.ObjectId,
    ref: "ProductionHouse",
    required: true,
  },
  mediaUrl: {
    type: String,
    minlength: 16,
    maxlength: 2048,
  },
  seasons: {
    type: [SeasonSchema],
  },
  duration: {
    type: String,
    minlength: 3,
    maxlength: 128,
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


export default mongoose.model("Media", MediaSchema);

