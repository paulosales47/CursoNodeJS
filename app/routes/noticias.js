module.exports = function(app){
    app.get('/noticias', function(requisicao, resposta){

        let conexao = app.config.dbConnection();
        let noticiaModel = app.app.models.noticiaModel;

        noticiaModel.BuscarNoticias(conexao, function(erro, resultado){
            resposta.render('noticias/noticias', {noticias: resultado});
        }); 
    });
}