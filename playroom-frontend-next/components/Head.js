import Head from "next/head";

export default function HeadComponent() {

  return (
    <Head>
      <title>Playroom</title>
      <meta name="description" content="Connect in one music room,from anywhere." />
      <link rel="icon" href="/logo.ico" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="shortcut icon" href="/logo.ico" />
      {/* not using PWA*/}
      {/* <link rel="mask-icon" href="/icons/mask-icon.svg" color="#FFFFFF" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" /> */}
      {/* <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/icons/touch-icon-ipad.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/touch-icon-iphone-retina.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="167x167"
        href="/icons/touch-icon-ipad-retina.png"
      /> */}
      {/* <link rel="manifest" href="/manifest.json" /> */}
      <meta name="twitter:card" content="Connect in one music room,from anywhere." />
      <meta name="twitter:url" content="https://playroom.mattl.im" />
      <meta name="twitter:title" content="Playroom" />
      <meta name="twitter:description" content="Connect in one music room,from anywhere." />
      <meta name="twitter:image" content="/icons/icon-512x512.png" />
      <meta name="twitter:creator" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Playroom" />
      <meta property="og:description" content="Connect in one music room,from anywhere." />
      <meta property="og:site_name" content="Playroom" />
      <meta property="og:url" content="https://playroom.mattl.im" />
      {/* <meta property="og:image" content="/icons/icon-512x512.png" /> */}

      {/* <link
        rel="apple-touch-startup-image"
        href="/imgs/apple_splash_2048.png"
        sizes="2048x2732"
      />
      <link
        rel="apple-touch-startup-image"
        href="/imgs/apple_splash_1668.png"
        sizes="1668x2224"
      />
      <link
        rel="apple-touch-startup-image"
        href="/imgs/apple_splash_1536.png"
        sizes="1536x2048"
      />
      <link
        rel="apple-touch-startup-image"
        href="/imgs/apple_splash_1125.png"
        sizes="1125x2436"
      />
      <link
        rel="apple-touch-startup-image"
        href="/imgs/apple_splash_1242.png"
        sizes="1242x2208"
      />
      <link
        rel="apple-touch-startup-image"
        href="/imgs/apple_splash_750.png"
        sizes="750x1334"
      />
      <link
        rel="apple-touch-startup-image"
        href="/imgs/apple_splash_640.png"
        sizes="640x1136"
      /> */}
    </Head>
  )
}