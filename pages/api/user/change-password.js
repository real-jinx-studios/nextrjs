import { connectToDB, dbQuery } from "../../../lib/db";
import { hashPassword, verifyPassword } from "../../../lib/auth";
import { getSession } from "next-auth/react";
export default async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }

  const session = await getSession({ req: req });

  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  const userEmail = session.user.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const client = await connectToDB();
  let queryObject = {
    query: "SELECT * FROM users WHERE email=? LIMIT 1",
    values: [userEmail],
  };
  let user = await dbQuery(client, queryObject);
  user = user[0];

  if (!user) {
    res.status(404).json({ message: "User not found." });
    client.close();
    return;
  }

  const currentPassword = user.password;

  const passwordsAreEqual = await verifyPassword(oldPassword, currentPassword);

  if (!passwordsAreEqual) {
    res.status(403).json({ message: "Invalid password." });
    return;
  }

  const hashedPassword = await hashPassword(newPassword);
  queryObject = {
    query: "UPDATE users SET password=? where email=?",
    values: [hashedPassword, userEmail],
  };
  const result = await dbQuery(client, queryObject);

  res.status(200).json({ message: "Password updated!" });
}
