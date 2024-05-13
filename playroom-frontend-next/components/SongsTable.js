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

import FavoriteButton from "@/components/FavoriteButton"
import AddToPlayroomButton from "@/components/AddToPlayroomButton";

export default function SongsTable({ songs, handleFavorite, isAnimate }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/3">Title</TableHead>
          <TableHead className="w-1/3">Artist</TableHead>
          <TableHead className="w-1/12 hidden sm:table-cell">Genre</TableHead>
          <TableHead className="w-1/12"></TableHead>
          <TableHead className="w-1/12"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <AnimatePresence>
        {songs.map((song) => (
          <motion.tr
            key={song._id}
            initial={isAnimate ? { opacity: 1 } : {}}
            animate={isAnimate ? { opacity: 1 } : {}}
            exit={isAnimate ? { opacity: 0, height: 0, x: -100} : {}}
            transition={isAnimate ? { duration: 0.3 } : {}}
            className="hover:bg-gray-50 border-b border-gray-100"
            style={{transition: "height 0.5s ease-in-out, opacity 0.5s ease-in-out"}}
            >
            <TableCell className="font-medium">{song.track}</TableCell>
            <TableCell>{song.artist}</TableCell>
            <TableCell className="hidden sm:table-cell">{song.genre}</TableCell>
            {/* <TableCell>{song.duration}</TableCell> */}
            <TableCell>
              <FavoriteButton song={song} handleFavorite={handleFavorite} />
            </TableCell>
            <TableCell>
              <AddToPlayroomButton song={song}/>
            </TableCell>
          </motion.tr>
        ))}
        </AnimatePresence>
      </TableBody>
    </Table>
  )
}