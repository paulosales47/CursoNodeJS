module.exports = function(aplicacao){

    aplicacao.get('/noticia', function(requisicao, resposta){
        aplicacao.app.controllers.noticia.noticia(aplicacao, resposta);
    });

    aplicacao.get('/noticias', function(requisicao, resposta){
        aplicacao.app.controllers.noticia.noticias(aplicacao, resposta);
    });


}