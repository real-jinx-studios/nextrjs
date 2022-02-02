import { hash, compare } from "bcryptjs";

//method for hashing pass using the bcryptjs library
export async function hashPassword(password) {
  //has method takes original password and salt. too much salt will make it slow
  const hPassword = await hash(password, 12);

  return hPassword;
}

//compare user entered password to stored hash in db to see if match
export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);

  return isValid;
}
