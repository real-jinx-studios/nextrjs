import { connectToDB, dbQuery } from "../../../lib/db";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  console.log("why?");
  if (req.method === "GET") {
    const session = await getSession({ req });
    const username = req.query.username;
    const email = req.query.email;
    const client = await connectToDB();
    const queryObject = {
      query: "SELECT * FROM customers WHERE email=? LIMIT 1",
      values: [session.user.email],
    };
    const result = await dbQuery(client, queryObject);
    client.close();
    res.status(200).json(result[0]);
  }
}
