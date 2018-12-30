module.exports = function(aplicacao){
    aplicacao.get('/noticia', function(requisicao, resposta){

        let conexao = aplicacao.config.dbConnection();
        let noticiaDAO = new aplicacao.app.models.NoticiaDAO(conexao);

        noticiaDAO.BuscarNoticia(function(erro, resultado){
            resposta.render('noticias/noticia', {noticia: resultado});
        }); 
    });
}