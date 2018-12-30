module.exports = function(aplicacao){
    aplicacao.get('/noticias', function(requisicao, resposta){

        let conexao = aplicacao.config.dbConnection();
        let noticiaModel = aplicacao.app.models.noticiaModel;

        noticiaModel.BuscarNoticias(conexao, function(erro, resultado){
            resposta.render('noticias/noticias', {noticias: resultado});
        }); 
    });
}