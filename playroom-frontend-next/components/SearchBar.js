import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function SearchBar( { searchTerm, onSearch }) {
  return (
    <div className="relative sm:w-auto w-full md:grow-0">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-primary" />
      <Input
        type="search"
        placeholder="Search songs..."
        value={searchTerm}
        onChange={onSearch}
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
      />
    </div>
  )
}