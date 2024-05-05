import express from 'express';
import type { Request, Response, Router } from 'express';
import { UserService } from '../services';
import { User } from 'types';
import jwt from 'jsonwebtoken';

export const userRouter: Router = express.Router();

userRouter.post('/register', async (req: Request, res: Response) => {
  const { name, email, password, birthdate } = req.query;
  const user: User = {
    name: name as string,
    email: email as string,
    password: password as string,
    birthdate: new Date(birthdate as string)
  }

  try {
    const userResult = await UserService.register(user);

    res.status(201).json({
      message: "User created successfully",
      user: userResult
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        message: error.message
      })
    }
  }
});

userRouter.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.query;

  try {
    const payload = await UserService.login(email as string, password as string);
    const secret = process.env.JWT_SECRET!;
    const expiresIn = 60 * 60 * 1
    const token = jwt.sign(payload, secret, {
      expiresIn: expiresIn
    });

    res.status(200).json({
      data: payload,
      token: token
    })

  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({
        message: error.message
      })
    }
  }
})