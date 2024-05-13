import Cors from 'cors';
// import { Request, Response, NextFunction } from 'express';

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const whitelist = process.env.WHITELISTED_DOMAINS ? process.env.WHITELISTED_DOMAINS.split(',') : '*' ;

const corsMiddleware = Cors({
  origin: whitelist
})

export default corsMiddleware;