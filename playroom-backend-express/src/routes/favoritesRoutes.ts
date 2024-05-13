import mongoose from "mongoose";
import express, { Router, Application, Request, Response } from 'express';
import { errorFn } from '../common/errorFunction';
import { User } from '../models/userModel';
import { Song } from '../models/songModel';

const router: Router = express.Router();

router.get("/", async (req: any, res: Response) => {
  try {
    const songs = await Song.find();

    const user = await User.findOne({ _id: req.auth.userId });

    // we need to add the user's favorites to the songs
    const userFavorites = user.favorites;

    // create a new array based on the order of userFavorites
    let songsWithFavoritesOnly = [];

    for (let i = 0; i < userFavorites.length; i++) {
      const song = songs.find((song) => song._id.toString() === userFavorites[i].toString());
      // console.log(userFavorites[i].toString());
      if (song) {
        songsWithFavoritesOnly.push({ ...song.toObject(), favorite: true });
      }
    }
    // console.log(songsWithFavoritesOnly);

    res.json(songsWithFavoritesOnly);
  } catch (error) {
    errorFn(error, res);
  }
});

router.post("/toggle", async (req: any, res: Response) => {
  try {
    const user = await User.findOne({ _id: req.auth.userId });

    console.log(req.body);

    // check if the song is already in the user's favorites
    const index = user.favorites.indexOf(req.body.id);
    const isFavorite = index > -1;
    if (isFavorite) {
      // remove the song from the user's favorites
      user.favorites.splice(index, 1);
    } else {
      // add the song to the user's favorites
      user.favorites.push(req.body.id);
    }
    await user.save();

    res.json({ isFavorite: !isFavorite });

  } catch (error) {
    errorFn(error, res);
  }
});

export default router;
