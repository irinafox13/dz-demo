import { createContext } from 'react';
import { useLocalStorage } from "../hooks/use-local-storage";

export const UserContext = createContext({ 
	user: { 
		name: '', 
		isLogined: false 
	}, 
	setUser: () => {} 
});

export const UserContextProvider = ({ children }) => {
	const [user, setUser] = useLocalStorage("user", {
    name: "",
    isLogined: false,
  });

	return <UserContext.Provider value={{ user, setUser }}>
		{children}
	</UserContext.Provider>;
};
