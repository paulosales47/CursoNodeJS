module.exports = function(aplicacao){
        aplicacao.get('/', function(requisicao, resposta){
        aplicacao.app.controllers.home.home(aplicacao, resposta);
    });
}