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

    db.query('DELETE FROM product_category WHERE id = ?', [req.body.id], (error, results) => {
        if (error) {
            res.status(500).end();
        }
        res.status(200).json({ data: results });
    });

    db.end();
};

module.exports = handler;
