module.exports = function(aplicacao){

    aplicacao.get('/noticia', function(requisicao, resposta){
        aplicacao.app.controllers.noticias.noticia(requisicao, aplicacao, resposta);
    });

    aplicacao.get('/noticias', function(requisicao, resposta){
        aplicacao.app.controllers.noticias.noticias(aplicacao, resposta);
    });


}