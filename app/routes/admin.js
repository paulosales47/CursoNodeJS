let {check, validationResult}  = require('express-validator/check');

module.exports = function(aplicacao){
    aplicacao.get('/formulario_inclusao_noticia', function(requisicao, resposta){
        resposta.render('admin/form_add_noticia');
    });

    aplicacao.post('/Noticias/Salvar', [
        check('TITULO', 'Titulo é obrigatório').not().isEmpty(),
        check('RESUMO', 'Resumo é obrigatório').not().isEmpty(),
        check('RESUMO', 'Resumo deve conter entre 10 e 100 caracteres').isLength(10, 100),
        check('AUTOR', 'Autor é obrigatório').not().isEmpty(),
        check('DT_NOTICIA', 'Data da notícia é obrigatório').not().isEmpty(),
        check('NOTICIA', 'Notícia é obrigatório').not().isEmpty()
    ],(requisicao, resposta) => {
        let noticia = requisicao.body;
        let errosFormulario = validationResult(requisicao);
        console.log(errosFormulario.mapped());

        if(!errosFormulario.isEmpty())
        {
            resposta.render('admin/form_add_noticia', {validacao: errosFormulario.mapped()});
            return;
        }

        let conexao = aplicacao.config.dbConnection();
        let noticiaDAO = new aplicacao.app.models.NoticiaDAO(conexao);

        noticiaDAO.SalvarNoticia(noticia, function(erro, resultado){
            resposta.redirect('/noticias');
        }); 
    });
}