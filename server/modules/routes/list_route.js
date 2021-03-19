//require express and create our router
const express = require( 'express' );
const router = express.Router();
//routes w/ logic 
router.get( '/', ( req, res )=>{
    console.log( 'in list_route.js GET');
    res.send( 'moo' )
})
//export 
module.exports = router;