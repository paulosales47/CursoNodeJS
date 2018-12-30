module.exports = function(aplicacao){
    aplicacao.get('/noticia', function(requisicao, resposta){

        let conexao = aplicacao.config.dbConnection();
        let noticiaModel = aplicacao.app.models.noticiaModel;

        noticiaModel.BuscarNoticia(conexao, function(erro, resultado){
            resposta.render('noticias/noticias', {noticias: resultado});
        }); 
    });
}