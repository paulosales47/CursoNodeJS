module.exports.noticia = function(aplicacao, resposta){
    let conexao = aplicacao.config.dbConnection();
    let noticiaDAO = new aplicacao.app.models.NoticiaDAO(conexao);

    noticiaDAO.BuscarNoticia(function(erro, resultado){
        resposta.render('noticias/noticia', {noticia: resultado});
    }); 
}

module.exports.noticias = function(aplicacao, resposta){
    let conexao = aplicacao.config.dbConnection();
    let noticiaDAO = new aplicacao.app.models.NoticiaDAO(conexao);

    noticiaDAO.BuscarNoticias(function(erro, resultado){
        resposta.render('noticias/noticias', {noticias: resultado});
    }); 
}
