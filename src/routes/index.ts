import { Router } from 'express';
import authRouter from './auth.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/auth', authRouter);
routes.get('/', () => {
  return `<h1>Funcionou</h1>`
})

export default routes;
