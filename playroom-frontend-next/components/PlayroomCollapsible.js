
import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown, Plus, X, SquarePlay, SquarePlus } from "lucide-react"
import { motion } from "framer-motion";

import { PlayroomsContext, YJSConnectionContext } from "./LayoutContext";

export default function PlayroomCollapsible({ isPlayroomsWindowOpen, setIsPlayroomsWindowOpen }) {
  const router = useRouter();

  const { slug } = router.query;

  const roomNames = useContext(PlayroomsContext);
  const isConnected = useContext(YJSConnectionContext);

  // sort room names by reverse string order
  const sortedRoomNames = roomNames.sort((a, b) => {
    return b.localeCompare(a);
  });

  function newPlayroom() {
    const doc = new Y.Doc();
    const wsProvider = new WebsocketProvider(
      process.env.NEXT_PUBLIC_YJS_URL,
      'my-roomname',
      doc
    );

    const yRoomNamesMap = doc.getMap('roomNamesMap');
    const yRoomMap = new Y.Map();

    const ySongsArray = new Y.Array();
    // ySongsArray.insert(0, ['song1', 'song2', 'song3']);
    yRoomMap.set('songs', ySongsArray);
    yRoomMap.set('isPlaying', false);
    yRoomMap.set('currentSongIndex', 0);
    yRoomMap.set('volume', 0.5);

    yRoomNamesMap.set(`playroom-${(Date.now() % 1000000000).toString().padStart(9, '0')}`, yRoomMap);
  }

  return (
    <Collapsible
      open={isPlayroomsWindowOpen}
      onOpenChange={setIsPlayroomsWindowOpen}
      className="w-full space-y-2"
    >
      <div className={`relative group flex items-center justify-between p-2 pr-0 rounded w-full`}>
        <div className={`${router.pathname.includes('/playrooms') ? 'text-primary font-semibold' : 'opacity-50'}`}>
          <SquarePlay className="inline-block w-7 mr-2" />
          <span className="hidden sm:inline">Playrooms</span>
        </div>
        <CollapsibleTrigger asChild className="hidden sm:block">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className={`rounded flex justify-center place-items-center w-8 h-full p-2 hover:bg-primary/10 ${isPlayroomsWindowOpen ? 'bg-primary/10' : ''}`}>
            <ChevronsUpDown className="h-4 w-4" color={`${isPlayroomsWindowOpen ? 'black' : 'gray'}`} />
            <span className="sr-only">Toggle</span>
          </motion.button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="hidden sm:block">
        <div className="h-72 space-y-3 overflow-scroll p-3 bg-white rounded-lg shadow-inner shadow-primary-foreground">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={newPlayroom}
            className={`rounded-md border px-3 py-3 text-sm space-x-1 w-full text-left mt-1`}>
            <SquarePlus className="inline-block mr-2" />new playroom
          </motion.button>
          <div className="w-full h-[1px] border-b"></div>
          {
            isConnected ?
              roomNames.length === 0 ?
                <div className="text-sm text-center text-gray-500">No playrooms yet</div>
                : null
              :
              <div className="text-sm text-center text-gray-500">Connecting...</div>
          }
          {
            sortedRoomNames.map((roomName, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} >
                <Link className={`block rounded-md border px-3 py-3 text-sm space-x-1 w-full text-left ${roomName === slug ? 'border-primary' : ''}`}
                  href={`/playrooms/${roomName}`}>
                  {roomName}
                </Link>
              </motion.div>
            ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )


}