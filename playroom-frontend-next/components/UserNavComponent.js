import Image from 'next/image'
import { signOut } from "next-auth/react"
import { useContext } from 'react';
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
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

import { SessionContext } from '@/components/LayoutContext';

export default function UserNavComponent() {
  const session = useContext(SessionContext)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="p-0 bg-transparent aspect-square rounded-full flex gap-2">
          <Image src={session.user.image} width="32" height="32" alt={session.user.name} className="rounded-full" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel className="text-base">{session.user.name}</DropdownMenuLabel>
        <DropdownMenuItem className="cursor-pointer text-base"
          onClick={(e) => {
            e.preventDefault()
            signOut({ callbackUrl: '/' })
          }}>
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
