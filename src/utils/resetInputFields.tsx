import { useContext } from "react";
import { DataContext } from "../contexts/auth";

export function ResetInputFields() {
  const { user, setUser }: any = useContext(DataContext);

  setUser({ ...user, email: "", name: "", password: "" });
}
