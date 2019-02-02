module.exports.noticia = function(requsicao, aplicacao, resposta){
    let id_noticia = requsicao.query.id_noticia;
    let conexao = aplicacao.config.dbConnection();
    let noticiaDAO = new aplicacao.app.models.NoticiaDAO(conexao);
    
    noticiaDAO.BuscarNoticia(id_noticia, function(erro, resultado){
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
