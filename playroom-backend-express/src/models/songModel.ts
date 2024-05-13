import mongoose from "mongoose";

const Schema = mongoose.Schema;

const musicSchema = new Schema({
  _id: Schema.Types.ObjectId,
  artist: String,
  track: String,
  written_by: String,
  performed_by: String,
  recording_date: String,
  cat_number: String,
  duration: String,
  license: String,
  tags: [String],
  download_link: String
});

export const Song = mongoose.model("Song", musicSchema);