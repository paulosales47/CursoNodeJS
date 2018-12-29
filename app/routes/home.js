module.exports = function(app){
        app.get('/', function(requisicao, resposta){
        resposta.render('home/render');
    });
}