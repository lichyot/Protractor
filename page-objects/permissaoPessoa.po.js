module.exports = new class PermissaoPessoaPage {
    constructor() {
        this.permissaoPessoa = $('#permissaoPessoa')
        this.novaPermissao = $('.falso-botao')
        this.escolhePermissao = element(by.cssContainingText('option', 'criar_processo_geral - Criar processo geral'))
        this.salvar = $('.botao-confirma')
        this.voltar = $('.falso-botao')
        this.erro = $('#error_explanation')
    }
}