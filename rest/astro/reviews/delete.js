const mysql = require('mysql');
const { db: Database } = require('../../../app.config');

const handler = async (req, res) => {
    const db = mysql.createConnection({
        host: Database.host,
        user: Database.user,
        password: Database.password,
        database: Database.database,
    });

    db.connect();

    db.query('DELETE FROM reviews WHERE id = ?', [req.body.id], (error, results) => {
        if (error) {
            res.status(500).end();
        } else if (results.affectedRows > 0) {
            res.status(200).json({ data: results });
        } else {
            res.status(500).end();
        }
    });

    db.end();
};

module.exports = handler;
