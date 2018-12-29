let mysql = require('mysql');

module.exports = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'user_portal_noticia',
        password: 'o*y-].#4tF&6ni3.',
        database: 'portal_noticias'
    });
}



