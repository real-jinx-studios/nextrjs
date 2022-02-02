//connect to MySQL database and return connection
export async function connectToDB() {
  const mysql = require("mysql2/promise");
  const client = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  return client;
}

//send a query to db client
export async function dbQuery(client, queryObject) {
  const [rows, fields] = await client.execute(
    queryObject.query,
    queryObject.values
  );

  return rows;
}
