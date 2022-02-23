import { connectToDB, dbQuery } from "../../../lib/db";

export default async function handler(req, res) {
  const client = await connectToDB();
  const queryObject = { query: "select * FROM products", values: [] };
  const results = await dbQuery(client, queryObject);

  res.status(200).json({ message: results });
}
