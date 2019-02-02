let {check, validationResult}  = require('express-validator/check');

module.exports = function(aplicacao){
    aplicacao.get('/formulario_inclusao_noticia', function(requisicao, resposta){
        aplicacao.app.controllers.admin.formulario_inclusao_noticia(resposta);
    });

    aplicacao.post('/noticias/salvar', [
        check('TITULO', 'Titulo é obrigatório').not().isEmpty(),
        check('RESUMO', 'Resumo é obrigatório').not().isEmpty(),
        check('RESUMO', 'Resumo deve conter entre 10 e 100 caracteres').isLength(10, 100),
        check('AUTOR', 'Autor é obrigatório').not().isEmpty(),
        check('DT_NOTICIA', 'Data da notícia é obrigatório').not().isEmpty(),
        check('NOTICIA', 'Notícia é obrigatório').not().isEmpty()
    ],(requisicao, resposta) => 
    {
       aplicacao.app.controllers.admin.salvar_noticia(aplicacao, requisicao, resposta, validationResult);
    });
}