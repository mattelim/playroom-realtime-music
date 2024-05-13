import { useRef, useEffect } from 'react';
import Router from "next/router";

import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'

import { Play, Pause, SkipForward, SkipBack } from 'lucide-react';
import { Slider } from './ui/slider';

export default function MyAudioPlayer({ isPlaying, currentSong, volume }) {
  const roomName = Router.query.slug;

  const audioRef = useRef(null);

  console.log('isPlaying', isPlaying);
  console.log('currentSong', currentSong);
  console.log('volume', volume);

  function handleTogglePlay() {
    const doc = new Y.Doc();
    const wsProvider = new WebsocketProvider(
      process.env.NEXT_PUBLIC_YJS_URL,
      'my-roomname',
      doc
    );

    const yRoomNamesMap = doc.getMap('roomNamesMap');
    const yRoomMap = yRoomNamesMap?.get(roomName);

    yRoomMap?.set('isPlaying', !isPlaying);
  }

  function handleVolumeChange(value) {
    // console.log('value', value);
    const doc = new Y.Doc();
    const wsProvider = new WebsocketProvider(
      process.env.NEXT_PUBLIC_YJS_URL,
      'my-roomname',
      doc
    );

    const yRoomNamesMap = doc.getMap('roomNamesMap');
    const yRoomMap = yRoomNamesMap?.get(roomName);

    yRoomMap?.set('volume', value);
  }

  function handleSkip(direction) {
    const doc = new Y.Doc();
    const wsProvider = new WebsocketProvider(
      process.env.NEXT_PUBLIC_YJS_URL,
      'my-roomname',
      doc
    );

    const yRoomNamesMap = doc.getMap('roomNamesMap');
    const yRoomMap = yRoomNamesMap?.get(roomName);

    const ySongsArray = yRoomMap?.get('songs');
    const currentSongIndex = yRoomMap?.get('currentSongIndex');

    if (ySongsArray && direction === 'fwd') {
      if (currentSongIndex === ySongsArray.length - 1) return;
      yRoomMap?.set('currentSongIndex', currentSongIndex + 1);
      const currentIsPlaying = yRoomMap?.get('isPlaying');
      yRoomMap?.set('isPlaying', false);
      setTimeout(() => {
        yRoomMap?.set('isPlaying', currentIsPlaying);
      }, 500);
      
    } else if (ySongsArray && direction === 'bwd') {
      if (currentSongIndex === 0) return;
      yRoomMap?.set('currentSongIndex', currentSongIndex - 1);
      const currentIsPlaying = yRoomMap?.get('isPlaying');
      yRoomMap?.set('isPlaying', false);
      setTimeout(() => {
        yRoomMap?.set('isPlaying', currentIsPlaying);
      }, 500);
    }
  }

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (volume) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className='bg-primary-foreground p-4 pt-6 rounded-full shadow gap-2 h-full flex flex-col justify-center place-items-center'>
      <audio
        ref={audioRef}
        src={"/" + currentSong?.download_link}>
      </audio>
      <p className='text-sm text-gray-500 mb-2'>{currentSong?.track}​</p>
      <div className='flex place-items-center gap-16'>
        <SkipBack fill="black" className='w-10 h-10'
          onClick={() => handleSkip('bwd')} />
        {
          isPlaying
            ?
            <Pause
              className='w-16 h-16 fill-primary stroke-primary'
              onClick={handleTogglePlay} />
            :
            <Play
              className='w-16 h-16 fill-primary stroke-primary'
              onClick={handleTogglePlay} />
        }
        <SkipForward fill="black" className='w-10 h-10'
          onClick={() => handleSkip('fwd')} />
      </div>

      <Slider className="w-32 h-10 "
        value={[volume]}
        max={1.0}
        step={0.1}
        onValueChange={handleVolumeChange} />
    </div>
  )
}