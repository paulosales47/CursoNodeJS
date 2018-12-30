module.exports = function(app){
    app.get('/noticia', function(requisicao, resposta){

        let conexao = app.config.dbConnection();
        let noticiaModel = app.app.models.noticiaModel;

        noticiaModel.BuscarNoticia(conexao, function(erro, resultado){
            resposta.render('noticias/noticias', {noticias: resultado});
        }); 
    });
}