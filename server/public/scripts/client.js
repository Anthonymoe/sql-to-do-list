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
        //target and empty element 
        let el = $( '#listOut' )
        el.empty();
        //loop through response and append to DOM
        for ( let i=0; i<response.length; i++ ){
            el.append( 
                `
                <tr>
                    <td> ${response[i].task }</td>
                    <td> ${response[i].completed}</td>
                    <td><button>Delete</button>
                </tr>
            ` 
            );
        }
    }).catch( function( err ){
        console.log( err );
        alert( 'problem' );
    })
    //display on DOM
}//end of getList