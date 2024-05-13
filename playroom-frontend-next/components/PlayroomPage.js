import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'

import SongsTablePlayroom from "./SongsTablePlayroom";
import { SessionContext, PlayroomsMapContext } from "@/components/LayoutContext";
import MyAudioPlayer from "@/components/MyAudioPlayer";

export default function FavoritesPage({ roomName }) {
  const router = useRouter();

  const [firstLoad, setFirstLoad] = useState(true);

  const session = useContext(SessionContext);
  const roomMap = useContext(PlayroomsMapContext);

  function handleDeleteRoom() {
    const doc = new Y.Doc();
    const wsProvider = new WebsocketProvider(
      process.env.NEXT_PUBLIC_YJS_URL,
      'my-roomname',
      doc
    );

    const yRoomNamesMap = doc.getMap('roomNamesMap');

    yRoomNamesMap.delete(roomName);

    router.push('/browse');
  }

  useEffect(() => {
    if (!session) return;
    setFirstLoad(false);
  }, [session]);

  if (session) {
    return (
      <>
        <div className={`p-4 sm:p-8 w-full relative space-y-6 sm:space-y-10`}>
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-end gap-6">
            <h3 className="text-3xl font-extrabold text-primary">{roomName}</h3>
            <Button variant="outline" onClick={handleDeleteRoom}>
              <Trash2 className="inline-block mr-2" />
              Delete Playroom
            </Button>
          </div>

          <MyAudioPlayer
            isPlaying={roomMap[roomName]?.isPlaying}
            currentSong={roomMap[roomName]?.songs[roomMap[roomName]?.currentSongIndex]}
            volume={roomMap[roomName]?.volume}
          />

          {
            firstLoad ?
              <p>Loading...</p>
              :
              roomMap[roomName]?.['songs'].length === 0 ?
                <div className="p-4 bg-gray-50 rounded-md text-gray-500">No songs in your playroom yet. Browse the song library and add some!</div>
                :
                <SongsTablePlayroom songs={roomMap[roomName]?.['songs']} currentSongIndex={roomMap[roomName]?.currentSongIndex} />
          }
        </div >
      </>
    )
  }
}
