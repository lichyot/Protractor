module.exports = new class PermissaoLotacaoPage {
    constructor() {
        this.permissaoLotacao = $('#permissaoLotacao')
        this.novaPermissao = $('.falso-botao')
        this.escolhePermissao = element(by.cssContainingText('option', 'criar_processo_geral - Criar processo geral'))
        this.lotacao = $('#permissao_lotacao_lotacao_id')
        this.salvar = $('.botao-confirma')
        this.voltar = $('.falso-botao')
        this.erro = $('#error_explanation')
    }
}