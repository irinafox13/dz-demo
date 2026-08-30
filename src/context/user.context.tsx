import React, { createContext } from 'react';
import { useLocalStorage } from "../hooks/use-local-storage";

interface User {
  name: string;
  isLogined: boolean;
}

interface UserContextType {
  user: User;
  setUser: (user: User) => void;
}

export const UserContext = createContext<UserContextType>({ 
	user: { 
		name: '', 
		isLogined: false 
	}, 
	setUser: () => {} 
});

export const UserContextProvider = ({ children }: {children: React.ReactNode}) => {
	const [user, setUser] = useLocalStorage<User>("user", {
    name: "",
    isLogined: false,
  });

	return <UserContext.Provider value={{ user, setUser }}>
		{children}
	</UserContext.Provider>;
};
