import mysql from 'serverless-mysql';
export const db = mysql({
    config: {
        host: 'sqlserver.elf.local',
        database: 'eztitles_ezt6_prod',
        user: 'root',
        password: 'papagal',
        port: 3306,
    },
});
export async function query(q, values = []) {
    try {
        const results = await db.query(q, values);
        await db.end();
        return results;
    }
    catch (e) {
        throw Error(e.message);
    }
}