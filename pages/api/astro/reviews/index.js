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

        db.query('SELECT * FROM reviews', (error, results) => {
            if (error) {
                res.status(500).end();
                return resolve();
            }
            if (results.length > 0) {
                res.status(200).json({ data: results });
                return resolve();
            }
            res.status(500).end();
            return resolve();
        });

        db.end();
    });
}
