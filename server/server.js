//requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const list = require( './modules/routes/list_route' );
//uses
app.use( express.static( 'server/public' ) );
app.use(bodyParser.urlencoded( { extended: true } ) );
app.use( '/list', list );
//globals
const port = 5000;
//spin up server 
app.listen( port, () =>{
    console.log( 'server is up on:', port );
})