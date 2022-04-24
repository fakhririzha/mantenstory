const express = require('express');
const next = require('next');
const blocker = require('express-user-agent-blocker');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const app = next({ dev: process.env.NODE_ENV !== 'production', hostname, port });
const handle = app.getRequestHandler();
const { json } = express;

app.prepare().then(() => {
    const server = express();

    const botList = fs.readFileSync('./botlist.txt').toString().split('\n').filter(Boolean);

    // block bot
    server.use(blocker(botList, { text: 'Unauthorized request' }));

    server.use(json({ limit: '2mb' }));

    // REST API
    // server.post('/paypal/detail-transaction', getPaypalDetail);

    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});
