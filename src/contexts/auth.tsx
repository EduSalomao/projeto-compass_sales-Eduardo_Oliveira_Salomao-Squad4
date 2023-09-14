import React, { createContext, useContext, useState } from "react";
import { User } from "../interfaces/user";

export const DataContext = createContext<{
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}>({
  user: { name: "", email: "", password: "" },
  setUser: () => {},
});

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
  });

  return (
    <DataContext.Provider value={{ user, setUser }}>
      {children}
    </DataContext.Provider>
  );
}
3;
