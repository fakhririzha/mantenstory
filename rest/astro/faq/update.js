const mysql = require('mysql');
const { db: Database } = require('../../../app.config');

module.exports = async function handler(req, res) {
    const db = mysql.createConnection({
        host: Database.host,
        user: Database.user,
        password: Database.password,
        database: Database.database,
    });

    db.connect();

    db.query('UPDATE faq SET title = ?, description = ? WHERE id = ?', [req.body.title, req.body.description, req.body.id], (error, results) => {
        if (error) {
            res.status(500).end();
        }
        res.status(200).json({ data: results });
    });

    db.end();
};
