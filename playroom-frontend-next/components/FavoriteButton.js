import axios from "axios";
import { motion } from 'framer-motion';

export default function FavoriteButton({ song, handleFavorite }) {
  const toggleFavorite = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_REMOTE_API_URL || ''}/favorites/toggle`,
        { "id": song._id },
        { withCredentials: true });
      const data = await response.data;
      if (response.status !== 200) {
        console.log(data);
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log(data);
      handleFavorite(song._id, data.isFavorite);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.button 
    onClick={toggleFavorite} 
    whileTap={{ scale: 1.2 }}
    transition={{ duration: 0.2 }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.8} className={`w-6 h-6 hover:stroke-primary transition-colors  ${song.favorite ? 'fill-primary ' : 'fill-none stroke-primary/30'}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    </motion.button>
  )
}