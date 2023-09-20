import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext({});

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready,setReady]=useState(false);
  useEffect(() => {
    if (!user) {
      const { data } = axios.get("/profile").then(() => {
        setUser(data);
        setReady(true)
      });
    }
  }, []);

  return (
    <UserContext.Provider value={(user, setUser,ready)}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
