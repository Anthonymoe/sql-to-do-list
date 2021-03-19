//require express and create our router
const express = require( 'express' );
const router = express.Router();
const pool = require( '../pool' );
//routes w/ logic 
router.get( '/', ( req, res )=>{
    console.log( 'in list_route.js GET');
    let queryString = `SELECT * FROM "items"`;
    pool.query( queryString ).then( ( results )=>{
        res.send( results.rows )
    }).catch( ( err )=>{
        console.log( err );
        res.send( 500 );
    })
})//end router.get
//export 
module.exports = router;