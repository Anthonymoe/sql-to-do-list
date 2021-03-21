//require express and create our router
const express = require( 'express' );
const router = express.Router();
const pool = require( '../pool' );
//routes w/ logic 
router.get( '/', ( req, res )=>{
    console.log( 'in list_route.js GET');
    let queryString = `SELECT * FROM "items" ORDER BY "id" ASC`;
    pool.query( queryString ).then( ( results )=>{
        res.send( results.rows )
    }).catch( ( err )=>{
        console.log( err );
        res.send( 500 );
    })
})//end router.get

router.post( '/', (req, res)=>{
    console.log( 'in list_route.js POST');
    let queryString = 'INSERT INTO "items"( "task", "completed" ) VALUES( $1, $2 );'
    pool.query( queryString, [ req.body.task, req.body.complete ]).then((results)=> {
        res.sendStatus( 200 );
    }).catch( ( err ) => {
        console.log( err )
        res.sendStatus( 500 );
    })
})//end router.post 

// works for single digit ids once you hit 10 it no longer works. 
router.put( '/', ( req, res ) =>{
    console.log( 'in router.put:', req.query );
    let queryString;
    if ( req.query.taskComplete == 'true' ){
        queryString = `UPDATE "items" SET "completed" = false WHERE "id" = $1`;
    }else {
        queryString = `UPDATE "items" SET "completed" = true WHERE "id" = $1`;
    }
    pool.query( queryString , [req.query.taskID]).then( (results) =>{
        res.sendStatus( 200 );
    }).catch( (err) =>{
        res.sendStatus( 500 );
        console.log( err )
    })
})//end router.put

router.delete( '/:id', ( req, res ) =>{
    console.log( 'in router.delete:', req.params );
    let queryString = `DELETE FROM "items" WHERE "id" = $1`;
    pool.query( queryString , [req.params.id,]).then( (results) =>{
        res.sendStatus( 200 );
    }).catch( (err) =>{
        res.sendStatus( 500 );
        console.log( err );
    })
})//end router.put

//export 
module.exports = router;