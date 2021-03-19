$( document ).ready( onReady );

function onReady() {
    getList();
}//end onReady

function getList(){
    console.log( 'in getList ' );
    //make and AJAX call to the server
    $.ajax({
        mehtod: 'GET',
        url: '/list'
    }).then( function( response ){
        console.log( 'back from GET:', response );
    }).catch( function( err ){
        console.log( err );
        alert( 'problem' );
    })
    //display on DOM
}//end of getList