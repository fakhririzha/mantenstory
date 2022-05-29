/* eslint-disable comma-dangle */
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

    db.query(
        'UPDATE products SET title = ?, category_id = ?, short_description = ?, description = ?, image_base64 = ? WHERE id = ?',
        [req.body.title, req.body.category_id, req.body.short_description, req.body.description, req.body.image_base64, req.body.id],
        (error, results) => {
            if (error) {
                res.status(500).end();
            }
            res.status(200).json({ data: results });
        }
    );

    db.end();
};
