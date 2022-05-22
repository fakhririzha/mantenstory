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
        short_description: req.body.short_description,
        description: req.body.description,
        image_base64: req.body.image_base64,
    };

    db.query('INSERT INTO products SET ?', data, (error, results) => {
        if (error) {
            res.status(500).end();
        }
        res.status(200).json({ data: results });
    });

    db.end();
};

module.exports = handler;
