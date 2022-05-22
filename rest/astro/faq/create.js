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

    const data = { title: req.body.title, description: req.body.description };

    db.query('INSERT INTO faq SET ?', data, (error, results) => {
        if (error) {
            res.status(500).end();
        }
        res.status(200).json({ data: results });
    });

    db.end();
};
