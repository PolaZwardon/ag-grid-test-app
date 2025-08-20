import { createContext } from 'react';

interface User {
    name: string;
    email: string;
}

interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => { },
});