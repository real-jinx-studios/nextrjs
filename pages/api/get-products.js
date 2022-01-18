import { query } from "../../lib/db";
const { performance } = require("perf_hooks");
export default async function GetProducts(req, res) {
  try {
    let start = performance.now();

    const data = await query(`
            SELECT *
            FROM products
        `);
    let end = performance.now();
    console.log(end - start, " query time");
    return res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
