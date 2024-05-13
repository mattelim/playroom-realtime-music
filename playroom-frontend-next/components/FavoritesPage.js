import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { SessionContext } from "next-auth/react";

import SongsTable from "./SongsTable";

export default function FavoritesPage({ songs, setSongs }) {

  const [firstLoad, setFirstLoad] = useState(true);

  const session = useContext(SessionContext);

  // const [searchTerm, setSearchTerm] = useState("");
  // const searchedSongs = songs.filter(song => song.track.toLowerCase().includes(searchTerm.toLowerCase()) || song.artist.toLowerCase().includes(searchTerm.toLowerCase()));

  const fetchSongs = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_REMOTE_API_URL || ''}/favorites/`, {
        withCredentials: true,
      });
      const data = await response.data;
      if (response.status !== 200) {
        // console.log(data);
        if (data.status === -1) {
          setErrorMessage(data.message);
        }
        setFirstLoad(false);
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      // console.log(data);
      setSongs(data);
      setFirstLoad(false);
    } catch (error) {
      console.error(error);
      setFirstLoad(false);
    }
  };

  function handleFavorite(song, isFavorite) {
    // remove the song from the list if it is unfavorited
    setSongs(prevSongs => {
      if (!isFavorite) {
        return prevSongs.filter(obj => obj._id !== song);
      } else {
        return prevSongs;
      }
    });
  }

  useEffect(() => {
    if (!session) return;
    fetchSongs();
  }, [session]);

  if (session) {
    return (
      <>
        <div className={`p-4 sm:p-8 w-full relative space-y-6 sm:space-y-10`}>
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-end gap-6">
            <h3 className="text-3xl font-extrabold text-primary">Favorites</h3>
          </div>
          {
            firstLoad ?
              <p>Loading...</p>
              :
              <SongsTable songs={songs} handleFavorite={handleFavorite} isAnimate={true} />
              // <SongsTable songs={searchTerm ? searchedSongs : songs} handleFavorite={handleFavorite} isAnimate={true} />
          }
        </div >
      </>
    )
  }
}
