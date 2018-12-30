module.exports = function(app){
    app.get('/noticias', function(requisicao, resposta){

        let conexao = app.config.dbConnection();

        conexao.query('SELECT * FROM portal_noticias.tb_noticias where ID_NOTICIA = 1',  function(erro, resultado){
            resposta.render('noticias/noticias', {noticia: resultado});
        }); 
    });
}