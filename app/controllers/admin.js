module.exports.formulario_inclusao_noticia = function(resposta){
    resposta.render('admin/form_add_noticia', {validacao: false, noticia: {} });
}

module.exports.salvar_noticia = function(aplicacao, requisicao, resposta, validationResult){
    let noticia = requisicao.body;
    let errosFormulario = validationResult(requisicao);

    if(!errosFormulario.isEmpty())
    {
        console.log(errosFormulario.array());
        resposta.render('admin/form_add_noticia', {validacao: errosFormulario.array(), noticia: noticia});
        return;
    }

    let conexao = aplicacao.config.dbConnection();
    let noticiaDAO = new aplicacao.app.models.NoticiaDAO(conexao);

    noticiaDAO.SalvarNoticia(noticia, function(erro, resultado){
        resposta.redirect('/noticias');
    }); 
}