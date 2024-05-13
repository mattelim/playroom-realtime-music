import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { SessionContext } from "next-auth/react";

import SearchBar from "./SearchBar";
import SongsTable from "./SongsTable";

export default function BrowsePage({ songs, setSongs }) {

  const [firstLoad, setFirstLoad] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  const session = useContext(SessionContext);

  const searchedSongs = songs.filter(song => song.track.toLowerCase().includes(searchTerm.toLowerCase()) || song.artist.toLowerCase().includes(searchTerm.toLowerCase()));

  const fetchSongs = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_REMOTE_API_URL || ''}/songs/`, {
        withCredentials: true,
      });
      // console.log(response);
      const data = await response.data;
      if (response.status !== 200) {
        console.log(data);
        // console.log(data.message);  
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

  function handleSearch(event) {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  function handleFavorite(song, isFavorite) {
    // look for song in songs and update its favorite status
    setSongs(prevSongs => {
      return prevSongs.map(obj => {
        if (obj._id === song) {
          obj.favorite = isFavorite;
        }
        return obj;
      });
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
            <h3 className="text-3xl font-extrabold text-primary">Browse Music</h3>
            <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
          </div>
          {
            firstLoad ?
              <p>Loading...</p>
              :
              <SongsTable songs={searchTerm ? searchedSongs : songs} handleFavorite={handleFavorite} isAnimate={false} />
          }
        </div >
      </>
    )
  }
}
