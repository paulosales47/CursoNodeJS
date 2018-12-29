let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', function(requisicao, resposta){
    resposta.send('<html><body><h1>Servidor rodando com express</h1></body></html>');
});

app.get('/tecnologia', function(requisicao, resposta){
    resposta.send('<html><body><h1>PAGINA DE TECNOLOGIA</h1></body></html>');
});

app.listen(3000, function(){
    console.log('Servidor rodando com Express');
})

