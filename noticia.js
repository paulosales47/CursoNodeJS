let http = require('http');

let server = http.createServer(function(requisicao, resposta){
    resposta.end('<html><body><h1>PORTAL DE NOTICIAS</h1></body></html>')
});

server.listen(3000);
