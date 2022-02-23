import { connectToDB, dbQuery } from "../../../lib/db";
export default async function handler(req, res) {
  const country = req.body.country;
  const client = await connectToDB();
  const queryObject = {
    query: "SELECT vat, code FROM vat WHERE country=?",
    values: [country],
  };

  const results = await dbQuery(client, queryObject);

  res.status(200).json({ results: results });
}
