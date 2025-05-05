import { User } from '../models/User.js';
import { generateToken } from '../utils/auth.js';

export const authResolvers = {
  Mutation: {
    signUp: async (_, { email, password, name }) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('User with this email already exists');
      }
      
      const user = new User({ email, password, name });
      await user.save();
      
      const token = generateToken(user);
      
      return {
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          createdAt: user.createdAt.toISOString()
        }
      };
    },
    
    signIn: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('Invalid email or password');
      }
      
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        throw new Error('Invalid email or password');
      }
      
      const token = generateToken(user);
      
      return {
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          createdAt: user.createdAt.toISOString()
        }
      };
    }
  },
  
  Query: {
    me: (_, __, { user }) => {
      if (!user) {
        throw new Error('Authentication required');
      }
      
      return {
        id: user.id,
        email: user.email,
        name: user.name,
        createdAt: user.createdAt.toISOString()
      };
    }
  }
}; 