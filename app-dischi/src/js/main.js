$(document).ready(function() {
    $.ajax({
        'url': 'database/dischi.php',
        'method': 'GET',
        'success': function(data){
            console.log(data);
        },//fine success
        'error': function(){
            console.log('errore');
        }//fine error
    });//fine ajax
});//fine document
