import express from 'express';

export default interface Router {
  routes: express.Router;
}
