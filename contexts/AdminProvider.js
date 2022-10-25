import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export function AdminProvider({ children }) {
  const [adminUser, setAdminUser] = useState({});

  useEffect(() => {
    async function f() {
    //   const loginStatus = await axios;

      setAdminUser({});
    }
  }, []);

  return <Context.Provider value={{ adminUser }}>{children}</Context.Provider>;
}

export function useAdmin() {
  return useContext(Context);
}
