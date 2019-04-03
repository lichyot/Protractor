module.exports = new class LoginPage {
    constructor() {
        
        this.header    = $('header')
        this.login     = $('input[name="matricula"]')
        this.senha     = $('input[name="senha"]')
        this.acessar   = $('input[value="Acessar"]')

        this.logado    = $('.logado')
        this.usuario   = $('.usuario')
        this.local     = $('.local')

        this.busca     = $('.busca')
        this.pendencia = $('.pendencias')
        this.logout    = $('.logout')

        this.sub_tab   = $('.sub-tab')
        this.formRecProcessos = $('#formReceberProcessos')

        this.novo = $('.novo')

        this.aproNumRese = $('label[for="numero_reservado"]')


    }

    acesso() {
        browser.get('/login')
    }
}