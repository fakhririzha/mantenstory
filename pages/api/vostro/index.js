import mysql from 'mysql';

export default function handler(req, res) {
    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mantenstory',
    });

    db.connect();

    let value;

    db.query('SELECT * FROM users', (error, results, fields) => {
        if (error) throw error;
        console.log('The result is: ', results);
        value = results;
    });

    db.end();

    res.status(200).json({ values: value });
}
