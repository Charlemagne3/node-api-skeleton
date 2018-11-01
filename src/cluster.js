const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length
const config = require('../config/environment');

const host = config.get('host')
const port = config.get('port')

if (cluster.isMaster) {
    console.log(`master process ${process.pid} running`)

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker process ${worker.process.pid} died`)
    });
} else {
    const server = http.createServer((req, res) => {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end();
    });
    
    server.listen(port, host, () => {});

    console.log(`worker process ${process.pid} running`)
}
