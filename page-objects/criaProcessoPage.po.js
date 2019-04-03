module.exports = new class CriaProcessoPage {
    constructor() {

        // this.admi = $('input[id="processo_categoria_id_1"]')
        this.legi = $('label[for="processo_categoria_id_2"]')
        
        this.tipo    = element(by.model('tipoId'))
        this.subTipo = element(by.name('processo[sub_tipo_id]'))
        this.escolheSubTipo = element.all(by.repeater('subtipo in subtipos | filter:filtrarSubtipo')).get(0)
        this.sigiloso = $('label[for="processo_privado"')
        this.urgente = $('label[for="processo_urgente"]')
        this.numDocumento = $('#processo_numero_documento')
        this.autoFisico = $('label[for="processo_auto_fisico"]')
        this.volumes = $('#processo_volumes')
        this.numeroFolhas = $('#processo_numero_folhas')
        this.processoAssunto = $('#processo_assunto')
        this.btnNovo = $('.botao-full')
        this.autorInteressado = $('.tabela-form .ui-autocomplete-input')
        this.escolheAutorInteressado = $$('.ui-menu-item').get(0)
        this.tipoInteresse = element.all(by.options('t.id as t.descricao for t in tiposEnvolvimento')).get(1)
        this.matricula = element(by.model('i.matricula'))
        this.criarProcesso = $('.botao-confirma')

        this.estrela = $('.bt-fav-add')
        this.autuar = $('.bt-autuar')
        this.imprimirCapa = $('.bt-capa')

        
    }

    acesso() {
        browser.get('/processos/new')
    }
}