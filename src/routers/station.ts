import express from 'express';
import type { Request, Response, Router } from 'express';
import { StationService } from '../services';
import { Station } from 'types';

export const stationRouter: Router = express.Router();

stationRouter.get('/', async (req: Request, res: Response) => {
  try {
    const stationList: Station[] = await StationService.getAll();

    res.status(200).json({
      station: stationList
    })
  } catch (error) {
    
  }
})