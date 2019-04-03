module.exports = new class DespachaProcessoPage {
    constructor() {
        // Despachar = Criar Remessa
        
        this.formDespacha = $('#formDespacharGrupo')
        this.busca = $('#campoFitro')
        this.linkDestacado = ('.link-destacado')
        this.marcados = $('label[for="marcados"]')
        this.lotacao = $('.autocomplete-lotacoes')
        this.escolheLotacao = $$('.ui-autocomplete').get(0)
        this.pessoa = $('select[name="pessoa_id"]')
        this.escolhePessoa = element.all(by.repeater('pessoa in pessoas')).get(1)
        this.dataLimite = $('input[name="data_limite"]')
        this.resumo = $('#observacao')
        this.enviarRemessa = $('.botao-confirma')

        this.btnConfirModal = $('.falso-botao .botao-confirma')
        this.sucesso = $('.toast .success')
    }
}