module.exports = {
    db: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mantenstory',
    },
    baseUrl: 'http://localhost:3001',
    encryption: {
        key: 'TXAjwm8k53PJG9NacLbyZavvQB2qBh43',
        algorithm: 'aes-256-cbc',
    },
    expiredToken: new Date(Date.now() + 1000 * 60 * 60),
    expiredDefault: 365,
    nameGlobalCookie: 'mntnstry',
};
