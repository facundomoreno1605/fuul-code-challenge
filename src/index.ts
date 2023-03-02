import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import serverSetup from './setup';
import { PORT, ENVIRONMENT } from './configs';

const app = express();

serverSetup(app);

app.listen(PORT, () => {
  console.log(`(${ENVIRONMENT}) Listening on port: ${PORT}`);
});
