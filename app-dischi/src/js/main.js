$(document).ready(function() {
    $.ajax({
        'url': 'database/dischi.php',
        'method': 'GET',
        'success': function(dati){
            console.log(dati);
            recupero_dati(dati)
        },//fine success
        'error': function(){
            console.log('errore');
        }//fine error
    });//fine ajax

function recupero_dati(dischi){
    for (var i = 0; i < dischi.length; i++) {
        var disco_corrente = dischi[i];
        console.log(disco_corrente);
        var genere = disco_corrente.genre;
        console.log(genere);
        }
    }// fine ciclo for
});//fine document
