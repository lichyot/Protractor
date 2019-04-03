const Home = require('../page-objects/homePage.po')
const Login = require('../page-objects/loginPage.po')

describe('Verifica Home', () => {
    beforeEach( () => Home.acesso())
    
    it('Verifica o Header', () => {
        expect(Home.nomeSistema.isPresent()).toBe(true)
    })

    it('Verifica barra de busca', () => {
        expect(Home.busca.isPresent()).toBeTruthy()
        expect(Home.ppes.isPresent()).toBeTruthy()
    })

    it('Verifica itens do form', () => {
        expect(Home.formAdmLeg.isPresent()).toBeTruthy()
        expect(Home.periodo.isPresent()).toBeTruthy()
        expect(Home.pesquisaTermo.isPresent()).toBeTruthy()
        expect(Home.btnMais.isPresent()).toBeTruthy()
        expect(Home.btnPesquisa.isPresent()).toBeTruthy()
    })

    it('Verificar ProData', () => {
        expect(Home.pesProdata.isPresent()).toBeTruthy()
        expect(Home.termoProdata.isPresent()).toBeTruthy()
        expect(Home.btnPesProAntigos.isPresent()).toBeTruthy()
    })


    // Ações
    it('Verifica Processo Inexistente', () => {
        Home.pesquisaTermo.sendKeys(Helper.procInexistente)
        Home.btnPesquisa.click()

        ProtractorHelper.waitForElementVisibility(Home.semRetornoPesquisa)
        expect(Home.semRetornoPesquisa.isPresent()).toBeTruthy()
    })

    it('Verifica Processo Existente', () => {
        Home.administrativo.click()
        Home.pesquisaTermo.clear()
        Home.pesquisaTermo.sendKeys(Helper.procExistente)
        Home.btnPesquisa.click()
        Home.btnMenos.click()

        expect(Home.proceRetornado.getText()).toContain(Helper.procExistente)
    })

    it('Pesquisa Processo Antigo', () => {
        Home.termoProdata.sendKeys(Helper.procAntigo)
        Home.btnPesProAntigos.click()

        expect(Home.proceRetornado.getText()).toContain(Helper.procAntigo)
    })

    it('Encaminha para Login', () => {
        Home.btnEntrar.click()
        expect(Login.login.isPresent()).toBeTruthy()
    })
})