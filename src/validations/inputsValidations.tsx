export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email !== "") {
    return emailRegex.test(email);
  }
  return true;
}

export function isValidPassword(password: string) {
  if (password !== "") {
    return password.length >= 6;
  }
  return true;
}

export const isValidName = (name: string) => {
  if (name !== "") {
    return name.length >= 4;
  }
  return true;
};
