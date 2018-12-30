exports.BuscarNoticias = function(conexao, callback) {
    conexao.query('SELECT * FROM portal_noticias.tb_noticias', callback);
}

exports.BuscarNoticia = function(conexao, callback){
    conexao.query('SELECT * FROM portal_noticias.tb_noticias WHERE ID_NOTICIA = 1', callback);
}

exports.SalvarNoticia = function(noticia, conexao, callback){
    conexao.query('INSERT INTO TB_NOTICIAS SET ?', noticia, callback);
}
