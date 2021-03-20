$( document ).ready( onReady );

function onReady() {
    getList();
    //click handlers
    $( '#addButton' ).on( 'click', addTask );
    $( '#listOut' ).on( 'click', '.compBut', taskComplete );
    $( '#listOut' ).on( 'click', '.deleteBut', deleteTask );
}//end onReady

function addTask() {
    console.log( 'in addTask' );
    let newTask = {
        task: $( '#taskIn' ).val(),
        complete: false
    }//end of newTask object
    //send to server via POST
    $.ajax({
        method: 'POST',
        url: '/list',
        data: newTask
    }).then( function( response ){
        console.log( 'back from POST with:', response );
        getList();
    }).catch( function( err ){
        alert( 'error adding item to db' );
        console.log( err );
    }) // end ajax
}//end of addTask 

//getList gets array from db and appends to DOM
function getList() {
    console.log( 'in getList ' );
    //make and AJAX call to the server
    $.ajax({
        mehtod: 'GET',
        url: '/list'
    }).then( function( response ){
        console.log( 'back from GET:', response );
         //display on DOM
        displayList( response );
    }).catch( function( err ){
        console.log( err );
        alert( 'problem' );
    })//end of ajax GET 
}//end of getList

//displays returned array on DOM - called in getList
function displayList( response ) {
     //target and empty element 
     let el = $( '#listOut' )
     el.empty();
     //create completed variable
     let complete;
     //loop through response and append to DOM
     for ( let i=0; i<response.length; i++ ){
        if ( `${response[i].completed}` === 'false' ){
            complete = 'No';
        } else {
            complete = 'Yes';
        }
         el.append( 
             `
             <tr>
                 <td> ${response[i].task }</td>
                 <td class=${complete}> ${complete} </td>
                 <td class="compBut" data-id=${response[i].id} data-complete=${response[i].completed}><button>Complete</button>
                 <td class="deleteBut" data-id=${response[i].id}><button>Delete</button>
             </tr>
         ` 
         );
     }//end of for loop
}//end of displayList

function taskComplete(){
    console.log( 'in taskComplete' );
    let finishedTask = $(this).data( 'id' );
    let thisTask = $(this).data( 'complete' );
    console.log( finishedTask );
    $.ajax({
        method: 'PUT',
        url: '/list/' + finishedTask + thisTask
    }).then( function( response ){
        console.log( 'back from taskComplete' );
        getList();
    }).catch( function( err ) {
        alert( 'could not complete task' );
        console.log( err );
    })
} //end of taskCompete

function deleteTask(){
    console.log( 'in deleteTask' );
    let taskToDelete= $(this).data( 'id' );
    $.ajax({
        method: 'DELETE',
        url: '/list/' + taskToDelete
    }).then( function( response ){
        console.log( 'back from DELETE with:', response );
        getList();
    }).catch( function(err) {
        alert( 'could not delete task' );
        console.log( err );
    })
}//end of deleteTask 