import { connectToDB, dbQuery } from "../../lib/db";
import { error } from "next/dist/build/output/log";

const { performance } = require("perf_hooks");
export default async function NextApiHandler1(a, res) {
  let client;
  try {
    client = await connectToDB();
  } catch (e) {
    res
      .status(500)
      .json({ message: "failed to connect to db", error: e.message });
  }
  const queryObject = { query: "SELECT * FROM users", values: [] };
  let start;
  let results;
  let end;
  try {
    start = performance.now();

    results = await dbQuery(client, queryObject);
    end = performance.now();
  } catch (e) {
    res.status(500).json({ message: "failed to query db", error: e.message });
  }
  return res.json([...results, { time: end - start }]);
}
