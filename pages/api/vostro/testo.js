import request from 'request';
import requestPromise from 'request-promise';

export default async function handler(req, res) {
    const options = {
        method: 'GET',
        url: 'https://api.webscraping.ai/html',
        qs: {
            api_key: '3b94f274-c505-4f1a-94d2-3194ac3c1a60',
            url: 'https://www.instagram.com/fakhririzha/?__a=1',
            proxy: 'residential',
            js: false,
        },
    };

    const data = await requestPromise(options);

    res.status(200).send(data);
}
