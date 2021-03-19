// create a pool connection to db that can be used in any other script
const pg = require( 'pg' );
//config for database connection
const pool = new pg.Pool({
    database: "doList",
    host: "localhost",
    port: 5432,
    max: 12,
    idleTimeoutMillis: 20000
});

//export
module.exports = pool; 
