import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from "../hooks/use-local-storage";

export const UserContext = createContext({
	name: "",
	isLogined: false
});

export const UserContextProvider = ({ children }) => {
	const [user, setUser] = useLocalStorage("user", {
    name: "",
    isLogined: false,
  });
	
	const [userName, setUserName] = useState(user.name);
	const [isLogined, setIsLogined] = useState(user.isLogined);

	useEffect(() => {
		setUser({
				name: userName,
    		isLogined: isLogined, 
			})
	}, [userName, isLogined])

	return <UserContext.Provider value={{ userName, setUserName, isLogined, setIsLogined }}>
		{children}
	</UserContext.Provider>;
};
