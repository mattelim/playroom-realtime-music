# Playroom: Real-time Synchronized Music Player App 🎵👯🌏

Playroom is a real-time synchronized collaborative music player app. Multiple people can tune into the same virtual music room and play tunes at the same time in different places! Playroom was speed-built using Next.js, Express.js, MongoDB, and YJS in 2.5-days.

![](https://github.com/mattelim/playroom-realtime-music/blob/main/screenshot_duo.png)

#### Stack Details

Frontend

- [Next.js](https://nextjs.org/) ([React](https://react.dev/))
- [Tailwind](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide](https://lucide.dev/)
- [Heroicons](https://heroicons.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [NextAuth.js](https://next-auth.js.org/)

Backend

- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/) ([MongoDB](https://www.mongodb.com/))
- [Yjs](https://docs.yjs.dev/)

## Develop

To develop locally, open two editor tabs, one for each subfolder.

In each editor terminal, run:

```
npm install

npm run dev
```

## Build

In each editor terminal, run:

```
npm run build
```

## Deploy

#### Frontend

The frontend can be easily deployed on [Vercel](https://vercel.com/) by connecting to it through GitHub integration.

#### Backend

The backend can be deployed on a Cloud server or using Docker using the Dockerfile within the folder. I love using [Cloudflare Tunnels](https://www.cloudflare.com/en-gb/products/tunnel/) for self-hosting ❤️.

#### YJS

To start a YJS server:

```
HOST=localhost PORT=1234 npx y-websocket
```

For more details, check out the [y-websocket documentation](https://github.com/yjs/y-websocket).
