import { NextApiHandler } from 'next'
import { query } from '../../lib/db'
const { performance } = require('perf_hooks');
export default async function NextApiHandler1(a, res) {
    console.log('the fuck')
    try {
        let start= performance.now()

        const results = await query(`
            SELECT *
            FROM users
        `)
        let end=performance.now()
        return res.json([...results, {time: end-start}])
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}
