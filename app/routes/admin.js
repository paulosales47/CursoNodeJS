module.exports = function(aplicacao){
    aplicacao.get('/formulario_inclusao_noticia', function(requisicao, resposta){
        resposta.render('admin/form_add_noticia');
    });

    aplicacao.post('/Noticias/Salvar', function(requisicao, resposta){
        let noticia = requisicao.body;
        let conexao = aplicacao.config.dbConnection();
        let noticiaDAO = new aplicacao.app.models.NoticiaDAO(conexao);

        noticiaDAO.SalvarNoticia(noticia, function(erro, resultado){
            resposta.redirect('/noticias');
        }); 
    });
}