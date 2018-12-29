let app = require('./config/server');

app.get('/', function(requisicao, resposta){
    resposta.render('home/render');
});

app.get('/tecnologia', function(requisicao, resposta){
    resposta.render('secao/tecnologia');
});

app.get('/formulario_inclusao_noticia', function(requisicao, resposta){
    resposta.render('admin/form_add_noticia');
});

app.get('/noticia', function(requisicao, resposta){
    resposta.render('noticias/noticias');
});


app.listen(3000, function(){
    console.log('Servidor rodando com Express');
})

