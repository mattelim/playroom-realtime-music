import dotenv from 'dotenv'; 
dotenv.config();

import app from './src/app';

// for preprod, change port to 7094
const port  = process.env.NODE_ENV === 'production' ? 8094 : 7094;

app.listen(port, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${port}`);
});
