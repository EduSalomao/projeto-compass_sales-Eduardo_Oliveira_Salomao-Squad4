import { User } from "../interfaces/user";

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email !== "") {
    return emailRegex.test(email);
  } else {
    return false;
  }
}

export function isValidPassword(password: string): boolean {
  const passwordRegex = /^[A-Za-z\d@$!%*?&]{6,}$/;

  if (password !== "" && passwordRegex.test(password)) {
    return true;
  } else {
    return false;
  }
}

export function isValidName(name: string): boolean {
  const nameRegex = /^[A-Za-z0-9\s\-']+$/;

  if (name !== "" && nameRegex.test(name)) {
    return name.length >= 4;
  } else {
    return false;
  }
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
