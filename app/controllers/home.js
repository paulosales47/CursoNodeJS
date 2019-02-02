module.exports.home = function(aplicacao, resposta){

    let conexao = aplicacao.config.dbConnection();
    let noticiaModel = new aplicacao.app.models.NoticiaDAO(conexao);

    noticiaModel.BuscarUltimasNoticias(5, function(erro, resultado){
        resposta.render('home/index', {noticias: resultado});
    });
}
