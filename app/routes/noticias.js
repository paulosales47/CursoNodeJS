module.exports = function(app){
    app.get('/noticia', function(requisicao, resposta){
        resposta.render('noticias/noticias');
    });
}