import "/styles/globals.css";
import { SessionProvider } from "next-auth/react"

const MyApp = ({ 
  Component, 
  pageProps: { session, ...pageProps },
}) => {
  const getLayout = Component.getLayout || ((page) => page);

  const LayoutPage = () => getLayout(<Component {...pageProps} />);
  
  return (
    <>
      <SessionProvider session={session}>
        <LayoutPage {...pageProps} />
      </SessionProvider>
    </>
  )
};

export default MyApp;