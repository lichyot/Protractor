const path = require('path')

module.exports = new class Helper {
    constructor() {

        this.numProcesso = $('#idProcesso')
        
        this.procAntigo = '1989000467'
        this.procExistente = '2017003696'
        this.procInexistente = '2013001211'

        this.toast = $('.toast')
        this.error = $('.error')
        this.toastSucesso = $('.toast .success')
        this.datePicker = $('.ui-datepicker-title')

        this.insereArquivo = $$('input[type=file]')

        // Modal [CANCEL] & [CONFIRMA]
        this.btnConfModal = $('[ng-click="clickModal(\'confirmar\')"]')
        this.btnCancModal = $('[ng-click="clickModal(\'cancelar\')"]')
        
        this.nomeUsuarioLogado = $('.usuario')
        this.nomeLotacaoLogado = $('#lotacao')

        this.pesGeral = $('#pes-geral')

        // Despacha Processo
        this.criaRemessa = $('.bt-despachar')

        // Número do processo
        this.numeroProcesso = $('#num-processo')

        // Paginação
        this.paginacao = $('.pagination')

        this.inAlert = $('.in-alert')

        this.upload = function () {
            var fileToUpload = '../files/test.pdf' // Path relativo.
            var absolutePath = path.resolve(__dirname, fileToUpload) // Transforma o path relativo em absoluto.
            return absolutePath
        }}
}