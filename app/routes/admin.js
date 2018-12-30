module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(requisicao, resposta){
        resposta.render('admin/form_add_noticia');
    });

    app.post('/Noticias/Salvar', function(requisicao, resposta){
        let noticia = requisicao.body;
        resposta.send(noticia);
    });
}