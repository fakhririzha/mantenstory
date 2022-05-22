const express = require('express');
const next = require('next');
const blocker = require('express-user-agent-blocker');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const app = next({ dev: process.env.NODE_ENV !== 'production', hostname, port });
const handle = app.getRequestHandler();
const { json } = express;

const createFaq = require('./rest/astro/faq/create');
const updateFaq = require('./rest/astro/faq/update');
const deleteFaq = require('./rest/astro/faq/delete');

const createProduct = require('./rest/astro/product/create');
const updateProduct = require('./rest/astro/product/update');
const deleteProduct = require('./rest/astro/product/delete');

app.prepare().then(() => {
    const server = express();

    const botList = fs.readFileSync('./botlist.txt').toString().split('\n').filter(Boolean);

    // block bot
    server.use(blocker(botList, { text: 'Unauthorized request' }));

    server.use(json({ limit: '2mb' }));

    // REST API
    server.post('/api/astro/faq/create', createFaq);
    server.post('/api/astro/faq/update', updateFaq);
    server.post('/api/astro/faq/delete', deleteFaq);

    server.post('/api/astro/product/create', createProduct);
    server.post('/api/astro/product/update', updateProduct);
    server.post('/api/astro/product/delete', deleteProduct);

    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});
