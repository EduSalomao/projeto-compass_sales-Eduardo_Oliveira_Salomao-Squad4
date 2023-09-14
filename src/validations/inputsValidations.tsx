import { User } from "../interfaces/user";

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email !== "") {
    return emailRegex.test(email);
  }
  return true;
}

export function isValidPassword(password: string): boolean {
  if (password !== "") {
    return password.length >= 6;
  }
  return true;
}

export function isValidName(name: string): boolean {
  if (name !== "") {
    name.length >= 4;
  }
  return true;
}

export function isInputsValidation(
  method: string,
  { email, password, name }: User
): boolean {
  if (method == "singup") {
    if (isValidEmail(email) && isValidPassword(password) && isValidName(name)) {
      return true;
    } else {
      return false;
    }
  }
  if (method == "login") {
    if (isValidEmail(email) && isValidPassword(password)) {
      return true;
    } else {
      return false;
    }
  }
  if (method == "recovery") {
    if (isValidEmail(email)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
