import { connectToDB, dbQuery } from "../../../lib/db";
import { hashPassword } from "../../../lib/auth";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const verifiedTime = Date.now();
    const hashedPassword = await hashPassword(password);

    const client = await connectToDB();
    const queryObject = {
      query:
        "INSERT INTO users (email, isVerified, password, username) VALUES (?,?,?,?)",
      values: [email, verifiedTime, hashedPassword, username],
    };
    const results = await dbQuery(client, queryObject);

    res.status(200).json({ results: results });
  } else if (req.method === "GET") {
    res.status(200).json({
      message:
        "make post request to register new user with email, password and username json.",
    });
  }
}
