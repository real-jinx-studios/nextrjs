import {NextApiHandler} from 'next'
import { query } from '../../lib/db';
const handler = async (_, res) => {
    try {
        const results = await query(`
      SELECT * FROM products
      ORDER BY prID DESC
      LIMIT 11
  `);
        return res.json(results);
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
};
export default handler;