import helmet from 'helmet';
import cors from 'cors';
import express from 'express';

export default (app: express.Express) => {
  app.use(cors());
  app.use(helmet());
  app.use(express.json());
};
