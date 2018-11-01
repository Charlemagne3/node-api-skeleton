const nconf = require('nconf');

const config = nconf.argv().env().file(`${__dirname}/environment.json`);

module.exports = config;
