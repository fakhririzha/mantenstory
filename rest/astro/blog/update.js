/* eslint-disable comma-dangle */
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

    db.query(
        'UPDATE blog SET title = ?, url_key = ?, description = ?, image_base64 = ? WHERE id = ?',
        [req.body.title, req.body.title.replaceAll(' ', '-').toString().toLowerCase(), req.body.description, req.body.image_base64, req.body.id],
        (error, results) => {
            if (error) {
                res.status(500).end();
            }
            res.status(200).json({ data: results });
        }
    );

    db.end();
};

module.exports = handler;
