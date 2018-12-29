let dbConnection = require('../../config/dbConnection');

module.exports = function(app){
    app.get('/noticia', function(requisicao, resposta){

        let conexao = dbConnection();

        conexao.query('SELECT * FROM portal_noticias.tb_noticias',  function(erro, resultado){
            resposta.render('noticias/noticias', {noticias: resultado});
        }); 
    });
}