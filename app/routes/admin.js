module.exports = function(aplicacao){
    aplicacao.get('/formulario_inclusao_noticia', function(requisicao, resposta){
        resposta.render('admin/form_add_noticia');
    });

    aplicacao.post('/Noticias/Salvar', function(requisicao, resposta){
        let noticia = requisicao.body;
        let noticiaModel = aplicacao.app.models.noticiaModel;
        let conexao = aplicacao.config.dbConnection();

        noticiaModel.SalvarNoticia(noticia, conexao, function(erro, resultado){
            resposta.redirect('/noticias');
        }); 
    });
}