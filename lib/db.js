import mysql from "mysql2/promise";
//connect to MySQL database and return connection
export async function connectToDB() {
  const client = await mysql.createConnection({
    host: "eztit-mysql.mysql.database.azure.com",
    port: "3306",
    database: "EZTitles",
    user: "eztit",
    password: "Papagal1",
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
