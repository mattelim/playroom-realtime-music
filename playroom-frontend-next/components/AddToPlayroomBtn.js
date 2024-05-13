import { useState } from "react";

import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Plus } from "lucide-react"
import { motion } from 'framer-motion';

export default function AddToPlayroomBtn({ roomName, song }) {

  const [isClicked, setIsClicked] = useState(false);

  function addToPlayroom(roomName) {
    const doc = new Y.Doc();
    const wsProvider = new WebsocketProvider(
      process.env.NEXT_PUBLIC_YJS_URL,
      'my-roomname',
      doc
    );

    const yRoomNamesMap = doc.getMap('roomNamesMap');
    const yRoomMap = yRoomNamesMap.get(roomName);

    const ySongsArray = yRoomMap.get('songs');
    // console.log(song);

    ySongsArray.push([{
      "key": Date.now(),
      "_id": song._id,
      "artist": song.artist,
      "track": song.track,
      "genre": song.genre,
      "download_link": song.download_link,
    }]);

    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  }

  return (
    <DropdownMenuItem className="cursor-pointer text-base relative"
      onClick={(e) => { e.preventDefault(); addToPlayroom(roomName); }}>
      <Plus className="inline-block mr-2 w-4 h-4" />
      {roomName}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isClicked ? 1 : 0, top: isClicked ? 0 : -10}}
        transition={{ duration: 0.3 }}
      className="absolute top-0 left-0 w-full h-full bg-white text-sm text-gray-500 flex justify-center place-items-center">
        added!
      </motion.div>
    </DropdownMenuItem>
  )
}