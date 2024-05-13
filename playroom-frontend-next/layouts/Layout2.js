import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react"

import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'

import HeadComponent from "@/components/Head";
import { SessionContext, PlayroomsContext, YJSConnectionContext, PlayroomsMapContext } from "@/components/LayoutContext"
import MainNavBar from "@/components/MainNavBar";

const Layout = ({ children }) => {
  const { data: session } = useSession()

  const [isPlayroomsWindowOpen, setIsPlayroomsWindowOpen] = useState(true);

  const [roomsMap, setRoomsMap] = useState({});
  const [roomNames, setRoomNames] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const doc = new Y.Doc();
    const wsProvider = new WebsocketProvider(
      process.env.NEXT_PUBLIC_YJS_URL,
      'my-roomname',
      doc
    );

    // ### Data Shape:

    // yRoomNamesMap: { roomName: yRoomMap }

    // yRoomMap: { songs: Y.Array, isPlaying: boolean, 
    // currentSongIndex: Y.Number, volume: Y.Number }

    const yRoomNamesMap = doc.getMap('roomNamesMap');
    // setRoomNames(Array.from(yRoomNamesMap.keys()));

    wsProvider.on('status', event => {
      console.log(event.status); // logs "connected" or "disconnected"
      setIsConnected(event.status === 'connected');
      if (event.status === 'connected') {
        setRoomNames(Array.from(yRoomNamesMap.keys()));
        console.log("yRoomNamesMap.toJSON()",yRoomNamesMap.toJSON());
        setRoomsMap(yRoomNamesMap.toJSON());
      }
    });

    yRoomNamesMap.observeDeep(event => {
      // console.log(event);
      console.log(yRoomNamesMap.toJSON());
      setRoomNames(Array.from(yRoomNamesMap.keys()));
      setRoomsMap(yRoomNamesMap.toJSON());
    });

    return () => {
      // Clean up the Yjs connection when the component unmounts
      wsProvider.disconnect();
    };
  }, []);

  return (
    <>
      <SessionContext.Provider value={session}>
        <PlayroomsContext.Provider value={roomNames}>
          <YJSConnectionContext.Provider value={isConnected}>
            <PlayroomsMapContext.Provider value={roomsMap}>
              <HeadComponent />
              <main>
                <div className="w-screen h-[100dvh] flex flex-col relative sm:flex-row overflow-clip">
                  <MainNavBar isPlayroomsWindowOpen={isPlayroomsWindowOpen} setIsPlayroomsWindowOpen={setIsPlayroomsWindowOpen} />
                  <div id='content-cont' className="overflow-y-scroll overflow-x-clip w-full grow">
                    {children}
                  </div>
                </div>
              </main>
            </PlayroomsMapContext.Provider>
          </YJSConnectionContext.Provider>
        </PlayroomsContext.Provider>
      </SessionContext.Provider>
    </>
  )
};

export default Layout;
