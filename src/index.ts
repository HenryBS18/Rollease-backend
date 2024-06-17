import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import type { Express, Request, Response } from 'express';
import { stationRouter, userRouter } from './routers';

dotenv.config();

const app: Express = express();
const port: number = parseInt(process.env.PORT as string, 10);

app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/station', stationRouter);

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    message: 'Endpoint not found'
  });
})

app.listen(port, () => console.log(`Server up and running on: http://localhost:${port}`));