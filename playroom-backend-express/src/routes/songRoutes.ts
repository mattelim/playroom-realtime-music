import mongoose from "mongoose";
import express, { Router, Application, Request, Response } from 'express';
import { errorFn } from '../common/errorFunction';
import { Song } from '../models/songModel';
import { User } from '../models/userModel';

const router: Router = express.Router();

router.get("/", async (req: any, res: Response) => {
  try {
    const songs = await Song.find();

    const user = await User.findOne({ _id: req.auth.userId });

    // we need to add the user's favorites to the songs
    const userFavorites = user.favorites;

    const songsWithFavorites = songs.map((song) => {
      if (userFavorites.includes(song._id)) {
        return { ...song.toObject(), favorite: true };
      } else {
        return { ...song.toObject(), favorite: false };
      }
    });

    // sort songs by ID string
    songsWithFavorites.sort((a, b) => {
      if (a._id < b._id) {
        return -1;
      }
      if (a._id > b._id) {
        return 1;
      }
      return 0;
    });

    res.json(songsWithFavorites);
  } catch (error) {
    errorFn(error, res);
  }
});

export default router;
