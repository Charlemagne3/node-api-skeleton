const http = require('http');
const config = require('../config/environment');

const host = config.get('host')
const port = config.get('port')

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end();
});

server.listen(port, host, () => {
    console.log(`http server listening on ${host}:${port}`);
});
