import { NextApiHandler } from 'next'
import { query } from '../../lib/db'

export default async function NextApiHandler1(a, res) {
    try {
        const results = await query(`
            SELECT *
            FROM users
        `)

        return res.json(results)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}
