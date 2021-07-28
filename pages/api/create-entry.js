import { NextApiHandler } from 'next'
import { query } from '../../lib/db'


export default async function Handler(req, res){
    console.log(req.body)
    const { username, password } = req.body
    try {
        if (!username || !password) {
            return res
                .status(400)
                .json({ message: '`username` and `password` are both required' })
        }

        const results = await query(
            `
                INSERT INTO users (username, password)
                VALUES (?, ?)
            `,
            [username, password]
        )

        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}
