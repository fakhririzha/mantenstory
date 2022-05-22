import mysql from 'mysql';
import { db as Database } from '@config';

export default function handler(req, res) {
    return new Promise((resolve) => {
        const db = mysql.createConnection({
            host: Database.host,
            user: Database.user,
            password: Database.password,
            database: Database.database,
        });

        db.connect();

        db.query('SELECT * FROM products', (error, results) => {
            if (error) {
                res.status(500).end();
                return resolve();
            }
            res.status(200).json({ data: results });
            return resolve();
        });

        db.end();
    });
}
