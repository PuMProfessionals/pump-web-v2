import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export function AdminProvider({ children }) {
  const [adminUser, setAdminUser] = useState(null);

  // attempt to log user in right after page load
  useEffect(() => {
    async function f() {
      const res = await axios.get("/api/admin/instant-log-in");
      // eslint-disable-next-line no-console
      console.log(res.data);

      if (res.data.loggedIn) {
        const { user } = res.data;

        setAdminUser(user);
      }
    }
    f();
  }, []);

  return (
    <Context.Provider value={{ adminUser, setAdminUser }}>
      {children}
    </Context.Provider>
  );
}

export function useAdmin() {
  return useContext(Context);
}
