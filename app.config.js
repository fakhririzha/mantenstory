module.exports = {
    db: {
        host: '103.253.212.95',
        user: 'manq8896_mantenstoryco',
        password: 'bismillah_b3rk4hselalu',
        database: 'manq8896_mantenstoryco',
    },
    baseUrl: 'https://mantenstory.co',
    encryption: {
        key: 'TXAjwm8k53PJG9NacLbyZavvQB2qBh43',
        algorithm: 'aes-256-cbc',
    },
    expiredToken: new Date(Date.now() + 1000 * 60 * 60),
    expiredDefault: 365,
    nameGlobalCookie: 'mntnstry',
};
