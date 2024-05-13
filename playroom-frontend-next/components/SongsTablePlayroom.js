import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import Router from "next/router";

import { X, ChevronDown, ChevronUp } from "lucide-react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { motion, AnimatePresence } from 'framer-motion';

export default function SongsTablePlayroom({ songs, currentSongIndex }) {
  const roomName = Router.query.slug;

  function handleMoveSong(index, direction) {
    const doc = new Y.Doc();
    const wsProvider = new WebsocketProvider(
      process.env.NEXT_PUBLIC_YJS_URL,
      'my-roomname',
      doc
    );

    const yRoomNamesMap = doc.getMap('roomNamesMap');
    const yRoomMap = yRoomNamesMap.get(roomName);

    const ySongsArray = yRoomMap.get('songs');

    if (direction === 'up') {
      if (index === 0) return;
      const song = ySongsArray.get(index);
      console.log(song);
      ySongsArray.delete(index);
      ySongsArray.insert(index - 1, [song]);
    } else if (direction === 'down') {
      if (index === ySongsArray.length - 1) return;
      const song = ySongsArray.get(index);
      console.log(song);
      ySongsArray.delete(index);
      ySongsArray.insert(index + 1, [song]);
    }
  }

  function handleDeleteSong(index) {
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

    ySongsArray.delete(index);
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/3 pl-6">Title</TableHead>
          <TableHead className="w-1/3">Artist</TableHead>
          <TableHead className="w-1/12 hidden sm:table-cell">Genre</TableHead>
          <TableHead className="w-1/12"></TableHead>
          <TableHead className="w-1/12"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <AnimatePresence>
          {songs?.map((song, index) => (
            <motion.tr
              key={song.key}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, height: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className={`hover:bg-gray-50 border-b border-gray-100`}
              style={{ transition: "height 0.5s ease-in-out, opacity 0.5s ease-in-out" }}
            >
              <TableCell className="font-medium relative pl-6">
                <span className="text-primary absolute -left-0">{currentSongIndex === index ? '● ' : ''}</span>
                {song.track}
              </TableCell>
              <TableCell>{song.artist}</TableCell>
              <TableCell className="hidden sm:table-cell">{song.genre}</TableCell>
              <TableCell className="flex gap-2 h-full place-items-center justify-center">
                <ChevronUp
                  className="w-6 h-6 hover:text-black text-gray-400"
                  onClick={() => handleMoveSong(index, 'up')}
                />
                <ChevronDown
                  className="w-6 h-6 hover:text-black text-gray-400"
                  onClick={() => handleMoveSong(index, 'down')}
                />
              </TableCell>
              <TableCell>
                <X className="w-6 h-6 text-primary/30 hover:text-primary"
                  onClick={() => handleDeleteSong(index)} />
              </TableCell>
            </motion.tr>
          ))}
        </AnimatePresence>
      </TableBody>
    </Table>
  )
}