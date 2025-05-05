import jwt from 'jsonwebtoken';
import { IUser } from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'yoursupersecretkey';
const TOKEN_EXPIRATION = process.env.TOKEN_EXPIRATION || '1d';

interface JwtPayload {
  id: string;
  email: string;
}

export const generateToken = (user: IUser): string => {
  const payload: JwtPayload = { 
    id: user.id, 
    email: user.email 
  };
  
  return jwt.sign(
    payload, 
    JWT_SECRET,
    { expiresIn: TOKEN_EXPIRATION }
  );
};

export const verifyToken = (token: string): JwtPayload | null => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded as JwtPayload;
  } catch (error) {
    return null;
  }
}; 