module.exports = function(aplicacao){
    aplicacao.get('/noticias', function(requisicao, resposta){

        let conexao = aplicacao.config.dbConnection();
        let noticiaDAO = new aplicacao.app.models.NoticiaDAO(conexao);

        noticiaDAO.BuscarNoticias(function(erro, resultado){
            resposta.render('noticias/noticias', {noticias: resultado});
        }); 
    });
}