const Pool = require("pg").Pool

const pool = new Pool({
    user: "rupi",
    host: "localhost",
    port: 5432,
    database: "naturefy"
});

module.exports = pool;