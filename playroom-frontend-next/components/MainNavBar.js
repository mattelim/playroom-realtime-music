import { useRouter } from "next/router";
import Link from "next/link";
import { useContext } from 'react';
import { Shapes, Star } from "lucide-react";
import { motion } from "framer-motion";

import UserNavComponent from "./UserNavComponent";
import { SessionContext } from '@/components/LayoutContext';
import PlayroomCollapsible from "./PlayroomCollapsible";


export default function MainNavBar({ isPlayroomsWindowOpen, setIsPlayroomsWindowOpen }) {
  const router = useRouter();
  const session = useContext(SessionContext)

  if (!session) {
    return null;
  }

  return (
    <nav className="sm:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] sm:from-pink-500/0 sm:to-red-500/10
    order-last flex flex-row w-full justify-between px-4 pt-2 pb-4 border-t sm:border-t-0
    sm:order-none sm:flex-col sm:w-72 sm:h-screen sm:px-4 sm:py-8 sm:border-r">
      <div className="flex flex-row sm:items-start gap-4 justify-between w-full items-center
      sm:flex-col sm:justify-start sm:w-auto">
        <UserNavComponent />
        <Link className={`relative group w-full`} href="/browse" >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`rounded w-full p-2 hover:bg-primary/10 ${router.pathname.includes('/browse') ? 'text-primary font-semibold' : 'opacity-50 hover:opacity-100'}`}>
            <Shapes className="inline-block w-7 mr-2" />
            <span className="hidden sm:inline">Browse Music</span>
          </motion.div>
          {/* <Shapes className="inline-block w-7 mr-2" /><span className="hidden sm:inline">Browse Music</span> */}
        </Link>
        <Link className={`relative group w-full`} href="/favorites" >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`rounded w-full p-2 hover:bg-primary/10 ${router.pathname.includes('/favorites') ? 'text-primary font-semibold' : 'opacity-50 hover:opacity-100'}`}>
            <Star className="inline-block w-7 mr-2" />
            <span className="hidden sm:inline">Favorites</span>
          </motion.div>
        </Link>
        <PlayroomCollapsible isPlayroomsWindowOpen={isPlayroomsWindowOpen} setIsPlayroomsWindowOpen={setIsPlayroomsWindowOpen} />
      </div>
    </nav>
  )
}