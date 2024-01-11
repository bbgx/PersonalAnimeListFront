export const emailRegex: RegExp = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const usernameRegex: RegExp = /^[a-zA-Z0-9_-]{3,}$/;
export const strongPasswordRegex: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
