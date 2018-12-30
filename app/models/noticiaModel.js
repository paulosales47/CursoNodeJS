exports.BuscarNoticias = function(conexao, callback) {
    conexao.query('SELECT * FROM portal_noticias.tb_noticias', callback);
}

exports.BuscarNoticia = function(conexao, callback){
    conexao.query('SELECT * FROM portal_noticias.tb_noticias WHERE ID_NOTICIA = 1', callback);
}