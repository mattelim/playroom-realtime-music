import { Request, Response, NextFunction } from 'express';

const timestampMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // GMT
  // const timestamp = new Date().toISOString();
  // SGT
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Singapore', dateStyle: 'medium', timeStyle: 'short', hour12: false });
  console.log(`[${timestamp}] Request made to ${req.method} ${req.url}`);
  next();
};

export default timestampMiddleware;
