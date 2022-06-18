import { createContext } from 'react';
import User from '../types/User.types';

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: (user) => {},
});