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

    const url_key = req.body.name.replaceAll(' ', '-');

    const data = {
        name: req.body.name,
        url_key: url_key.toString().toLowerCase(),
        short_description: req.body.short_description,
        detail_description: req.body.detail_description,
        image_base64: req.body.image_base64,
    };

    db.query('INSERT INTO product_category SET ?', data, (error, results) => {
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
