import express from 'express';

const router = express.Router();

router.get('/', (_req: express.Request, res: express.Response) => {
  return res.status(200).json({
    message: 'Hello world!'
  });
});

export default router;
