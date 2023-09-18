import { useState } from "react";

export function isLogged() {
  const [isLogged, setIsLogged] = useState(false);

  if (localStorage.getItem("userToken")) {
    setIsLogged(true);
  }

  return isLogged;
}
