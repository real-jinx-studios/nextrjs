import { connectToDB, dbQuery } from "../../../../lib/db";

export default async function handler(req, res) {
  const email = req.query.params[0];
  const token = req.query.params[1];
  //check if user exists in the verification table
  const queryObject = {
    query:
      //using select exists with limit 1 for best performance
      "SELECT EXISTS(SELECT * FROM email_verification WHERE email=? AND token=? LIMIT 1)",
    values: [email, token],
  };
  const client = await connectToDB();

  const results = await dbQuery(client, queryObject);
  //extract 0 (doesnt exist) 1 (exists) from query results
  const exists = results[0][Object.keys(results[0])[0]];
  if (exists === 1) {
    //verify(update) user account with adding timestamp to user table
    const verifiedTime = Date.now();
    let queryObject = {
      query: "UPDATE users SET isVerified=? WHERE email=?",
      values: [verifiedTime, email],
    };
    let results = await dbQuery(client, queryObject);
    res.status(200).json({
      message: "verified",
      results: results,
    });
    queryObject = {
      query: "DELETE FROM email_verification WHERE email=? AND token=?",
      values: [email, token],
    };
    results = await dbQuery(client, queryObject);
    console.log(results);
    return;
  }
  res.status(418).json({ error: "user not found" });
}
