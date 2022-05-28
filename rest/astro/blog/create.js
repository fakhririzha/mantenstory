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

    const url_key = req.body.title.split(' ');

    const data = {
        title: req.body.title,
        url_key: url_key[0].toString().toLowerCase(),
        description: req.body.description,
        image_base64: req.body.image_base64,
        timestamp: req.body.timestamp,
    };

    db.query('INSERT INTO blog SET ?', data, (error, results) => {
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
