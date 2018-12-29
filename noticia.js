let http = require('http');

let server = http.createServer(function(requisicao, resposta){

    let categoria = requisicao.url;

    if(categoria == '/tecnologia'){
        resposta.end('<html><body><h1>TECNOLOGIA</h1></body></html>');
    }
    else if(categoria == '/moda'){
        resposta.end('<html><body><h1>MODA</h1></body></html>');
    }
    else{
        resposta.end('<html><body><h1>NOTICIAS</h1></body></html>');
    }
});

server.listen(3000);
