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
        var html_template = $('#cd-template').html();
        var template = Handlebars.compile(html_template);
        for (var i = 0; i < dischi.length; i++) {
            var disco_corrente = dischi[i];
            console.log(disco_corrente);
            // var genere = disco_corrente.genre;
            // console.log(genere);
            var context = {
                'copertina' : disco_corrente.poster,
                'titolo' : disco_corrente.title,
                'artista': disco_corrente.author,
                'anno' :  disco_corrente.year,
                'genere': disco_corrente.genre
            };
            var template_generato = template(context);
            $('.container-cd').append(template_generato);
        }//fine ciclo for
    }// fine function
});//fine document
