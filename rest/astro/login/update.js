/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const mysql = require('mysql');
const { decrypt } = require('../../../components/helpers/encryption');
const { db: Database } = require('../../../app.config');

const handler = async (req, res) => {
    const db = mysql.createConnection({
        connectionLimit: 10,
        host: Database.host,
        user: Database.user,
        password: Database.password,
        database: Database.database,
    });

    db.query(`UPDATE users SET last_login = "${req.body.last_login}" WHERE username = "${req.body.username}"`, (error, results) => {
        if (error) {
            res.status(500).end();
        } else if (results.affectedRows > 0) {
            res.status(200).json({ data: results });
        } else {
            res.status(500).end();
        }
    });
};

module.exports = handler;
