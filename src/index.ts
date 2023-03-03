import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('express-async-errors');
import serverSetup from './setup';
import { PORT, ENVIRONMENT } from './configs';

const app = express();

serverSetup(app);

app.listen(PORT, () => {
  console.log(`(${ENVIRONMENT}) Listening on port: ${PORT}`);
});
