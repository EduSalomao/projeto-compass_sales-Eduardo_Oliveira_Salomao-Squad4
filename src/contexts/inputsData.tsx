import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { User } from "../interfaces/user";

interface DataContextProps {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

export const DataContext = createContext<DataContextProps>({
  user: { name: "", email: "", password: "" },
  setUser: () => {},
});

interface DataProviderProps {
  children: ReactNode;
}

export function DataProvider({ children }: DataProviderProps) {
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
