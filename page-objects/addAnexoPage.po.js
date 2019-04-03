module.exports = new class AddAnexoPage {
    constructor() {
        this.anexo = $('#aba-anexos')
        this.btnAnexo = $('.bt-anexo')
        this.pagInic = element(by.model('pagina_inicial'))
        this.pagFinal = element(by.model('pagina_final'))
        this.btnConfirma = $$('.botao-confirma').first()

        this.listaAnexo = $('.doc')
        this.editAnexo = $('.doc footer .bt-anexo')
        this.exclAnexo = $('.doc footer .bt-excluir')

        // Editar Anexo
        this.descricao = $('input[name="anexo[descricao]"]')
        this.dataCriacao = $('input[name="anexo[created_at]"]')
    }
}