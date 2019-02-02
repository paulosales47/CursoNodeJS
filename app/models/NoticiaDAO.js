class NoticiaDAO {
    constructor(conexao) {
        this._conexao = conexao;
    }
    BuscarNoticia(callback) {
        this._conexao.query('SELECT * FROM portal_noticias.tb_noticias WHERE ID_NOTICIA = 1', callback);
    }
    BuscarNoticias(callback) {
        this._conexao.query('SELECT * FROM portal_noticias.tb_noticias', callback);
    }
    SalvarNoticia(noticia, callback) {
        this._conexao.query('INSERT INTO TB_NOTICIAS SET ?', noticia, callback);
    }

    BuscarUltimasNoticias(quantidade, callback) {
        this._conexao.query('SELECT * FROM portal_noticias.tb_noticias ORDER BY DT_CRIACAO DESC LIMIT ' + quantidade, callback);
    }
}

module.exports = function(){
    return NoticiaDAO;
}