import { useContext } from "react";

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
import { CopyPlus } from "lucide-react"
import { motion } from 'framer-motion';

import { PlayroomsContext } from "@/components/LayoutContext";
import AddToPlayroomBtn from "@/components/AddToPlayroomBtn";


export default function AddToPlayroomButton({ song }) {
  const roomNames = useContext(PlayroomsContext);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button
          whileTap={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}>
          <CopyPlus className="w-6 h-6 text-primary/30 hover:text-primary" />
        </motion.button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <div className="max-h-40 overflow-scroll">
          {
            roomNames.map((roomName, index) => (
              <AddToPlayroomBtn key={index} roomName={roomName} song={song} />
            ))

          }
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}