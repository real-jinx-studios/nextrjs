export function getTables() {

    let mysql = require('mysql');
    let connection = mysql.createConnection({
        host: 'https://php7316.sqlserver.elf.local',
        user: 'root',
        password: 'papagal',
        database: 'eztitles_ezt6_dev'
    });

    connection.connect();

    connection.query('SELECT * FROM customers', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
    });

    connection.end();
}