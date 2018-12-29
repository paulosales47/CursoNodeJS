let mysql = require('mysql');

let funcaoConectar = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'user_portal_noticia',
        password: 'o*y-].#4tF&6ni3.',
        database: 'portal_noticias'
    });
}

module.exports = function(){
    return funcaoConectar;
}


