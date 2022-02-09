import { connectToDB, dbQuery } from "../../../lib/db";
const { performance } = require("perf_hooks");
export default async function handler(req, res) {
  let start = performance.now();

  const client = await connectToDB();
  const queryObject = {
    query:
      "SELECT EXISTS(SELECT * FROM email_verification WHERE email=? AND token=? LIMIT 1)",
    values: ["ass", "fuck"],
  };
  let startQ = performance.now();
  const results = await dbQuery(client, queryObject);

  let endQ = performance.now();

  let end = performance.now();

  const performanceO = end - start;
  const performanceQ = endQ - startQ;

  res.status(200).json({ overall: performanceO, query_exec: performanceQ });
}
