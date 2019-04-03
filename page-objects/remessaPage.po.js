module.exports = new class RemessasPage {
    constructor() {

        this.remessa = $('#remessas')
        this.exibir  = $$('.bt-exibir').first()
        this.excluir = $$('.bt-excluir').first()

        this.btnVoltar = $$('.falso-botao').first()
        this.btnCancelarRemessa = $('#botaoCancelarRemessa')

        this.imprimirRemessa = $('.bt-imprimir')
        

    }
}