module.exports = new class HomePage {
    constructor() {
        // Header
        this.nomeSistema = $('header a h1')
        this.entrar      = $('.btn-entrar')

        // Nav
        this.busca = $('.ativo')
        this.ppes  = $('a[href*="/busca/processos-publicados"]')

        // Form Busca
        this.formAdmLeg    = $('.grupo-2')
        this.administrativo = $$('label[for="form-adm"]')
        this.periodo       = $('.periodo-data')
        this.pesquisaTermo = $('#termo')
        this.btnMais       = $('.bt-mais')
        this.btnMenos      = $('#mostrarOpcoes')
        this.btnPesquisa   = $('input[value="Pesquisar"]')

        // Pesquisa ProData
        this.pesProdata       = $('#pesquisa-prodata')
        this.termoProdata     = $('#termo_prodata')
        this.btnPesProAntigos = $('input[value="Pesquisar processos antigos"]')

        // ###################################################################
        this.semRetornoPesquisa  = $('.resultado')
        this.proceRetornado      = $('.link-destacado')
        this.btnEntrar           = $('.bt-entrar')
    }

    acesso() {
        browser.get('/busca')
    }
}