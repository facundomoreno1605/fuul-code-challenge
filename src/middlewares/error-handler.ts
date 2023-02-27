import express from 'express';

export default (
  err: undefined,
  _req: express.Request,
  res: express.Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: express.NextFunction
) => {
  console.log(err);

  return res.status(500).json({
    message: 'Internal Server Error'
  });
};
