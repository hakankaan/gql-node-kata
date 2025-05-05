import { IncomingMessage } from 'http';
import { User, IUser } from './models/User.js';
import { verifyToken } from './utils/auth.js';

export interface Context {
  user: IUser | null;
}

export const createContext = async ({ req }: { req: IncomingMessage }): Promise<Context> => {
  // Get the authorization header
  const auth = req.headers.authorization || '';
  
  // Check if there is a token
  if (!auth || !auth.startsWith('Bearer ')) {
    return { user: null };
  }
  
  // Verify token
  const token = auth.split(' ')[1];
  const payload = verifyToken(token);
  
  if (!payload) {
    return { user: null };
  }
  
  // Get user from database
  try {
    const user = await User.findById(payload.id);
    return { user: user || null };
  } catch (error) {
    return { user: null };
  }
}; 