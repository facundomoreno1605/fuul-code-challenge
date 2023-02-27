import dotenv from 'dotenv';
import express from 'express';
import serverSetup from './setup';

dotenv.config();
const { PORT, ENVIRONMENT } = process.env;

const app = express();

serverSetup(app);

app.listen(PORT, () => {
  console.log(`(${ENVIRONMENT}) Listening on port: ${PORT}`);
});
