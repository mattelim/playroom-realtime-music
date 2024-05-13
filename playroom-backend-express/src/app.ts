import express, { Application, Request, Response } from 'express';
import compression from 'compression';

/* middleware imports */
import cors from 'cors';
import authjwtMiddleware from './middlewares/authjwtMiddleware';
import timestampMiddleware from './middlewares/timestampMiddleware';

/* route imports */
import songRoutes from './routes/songRoutes';
import favoritesRoutes from './routes/favoritesRoutes';

// --------- OPTIONAL YJS CONNECTION vvv

// const Y = require('yjs')
// const { WebsocketProvider } = require('y-websocket')

// const doc = new Y.Doc()
// const ws = require('ws')
// const wsProvider = new WebsocketProvider(
//   process.env.YJS_URL,
//   'my-roomname',
//   doc,
//   { WebSocketPolyfill: ws }
// )

// wsProvider.on('status', event => {
//   console.log(event.status) // logs "connected" or "disconnected"
// })

// const yRoomNamesMap = doc.getMap('roomNamesMap')

// yRoomNamesMap.observe(event => {
//   // console.log(event);
//   console.log(yRoomNamesMap.toJSON());
// })

// --------- OPTIONAL YJS CONNECTION ^^^

const app = express();

/* Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(timestampMiddleware);

const whitelist =
  process.env.NODE_ENV === 'production' ?
    process.env.WHITELISTED_DOMAINS_PROD ? process.env.WHITELISTED_DOMAINS_PROD.split(',') : ''
    : process.env.WHITELISTED_DOMAINS_DEV ? process.env.WHITELISTED_DOMAINS_DEV.split(',') : '';
// app.use(Cors({ 
//   origin: whitelist,
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
// }));
console.log("Whitelist: ", whitelist);

const corsOptions = {
  origin: whitelist,  
  credentials: true,
};

app.use(cors(corsOptions));

app.use(authjwtMiddleware);

/* Routes */
app.get('/', (req, res) => {
  res.status(404).json({ message: 'Access Denied' });
});

app.use('/songs', songRoutes);
app.use('/favorites', favoritesRoutes);

export default app;
