import { connectToDB, dbQuery } from "../../../lib/db";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      let session;
      try {
        session = await getSession({req});
      } catch (e) {
        res.status(401).json({message: e.message});
      }
      const username = req.query.username;
      const email = req.query.email;
      let client;
      try {
        client = await connectToDB();
      } catch (e) {
        res.status(402).json({message: e.message});
      }
      const queryObject = {
        query: "SELECT * FROM customers WHERE email=? LIMIT 1",
        values: [session.user.email],
      };
      let result;
      try {
        result = await dbQuery(client, queryObject);
      } catch (e) {
        res.status(403).json({message: e.message});
      }
      try {
        client.close();
      } catch (e) {
        res.status(405).json({message: e.message});
      }
      res.status(200).json(result[0]);
    }
  } catch (e) {
    res.status(406).json({ message: e.message, fuck:'off' });
  }
}
