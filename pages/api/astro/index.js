import mysql from 'mysql';
import { db as Database } from '@config';

export default function handler(req, res) {
    const db = mysql.createConnection({
        host: Database.host,
        user: Database.user,
        password: Database.password,
        database: Database.database,
    });

    db.connect();

    let value;

    db.query('SELECT * FROM users', (error, results) => {
        if (error) throw error;
        value = results;
        console.log(value[0]);
        res.status(200).json({ values: value });
    });

    db.end();
}
