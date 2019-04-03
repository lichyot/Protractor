const Login = require('../page-objects/loginPage.po')


describe('Verifica Login', () => {
    it('Verifica Conteúdo da Tela', () => {
        expect(Login.header.getText()).toContain('SISTEMA DE GERENCIAMENTO DE PROCESSOS E DOCUMENTOS')
        expect(Login.login.isDisplayed()).toBeTruthy()
        expect(Login.senha.isDisplayed()).toBeTruthy()
        expect(Login.acessar.isDisplayed()).toBeTruthy()

    })

    it('Login Errado', () => {
        Login.login.sendKeys(Faker.internet.userName())
        Login.senha.sendKeys(Faker.internet.password())
        Login.acessar.click()

        expect(Helper.toast.isDisplayed()).toBeTruthy()
        expect(Helper.error.isDisplayed()).toBeTruthy()
    })

    it('Login Correto', () => {
        Login.login.sendKeys(process.env.PROTRACTOR_USUARIO)
        Login.senha.sendKeys(process.env.PROTRACTOR_SENHA)
        Login.acessar.click()

        // Esta presente na tela?
        expect(Login.logado.isDisplayed()).toBeTruthy()
        expect(Login.usuario.isDisplayed()).toBeTruthy()
        expect(Login.local.isDisplayed()).toBeTruthy()
    })

    it('Verifica Presença de [Busca | Pendência | Logout]', () => {
        expect(Login.busca.isDisplayed()).toBeTruthy()
        expect(Login.pendencia.isDisplayed()).toBeTruthy()
        expect(Login.logout.isDisplayed()).toBeTruthy()
    })

    it('Verifica Presença de [Sub-Tab | FormReceberProcessos]', () => {
        expect(Login.sub_tab.isDisplayed()).toBeTruthy()
        expect(Login.formRecProcessos.isDisplayed()).toBeTruthy()
    })
})