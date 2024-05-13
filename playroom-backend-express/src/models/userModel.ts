import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: 'String',
  name: 'String',
  email: 'String',
  status: 'Number',
  signedUpDate: 'Date',
  favorites: ['ObjectId'],
  playrooms: ['ObjectId'],
});

export const User = mongoose.model('User', userSchema);