const Login = require('../page-objects/loginPage.po')
const CriaProcesso = require('../page-objects/criaProcessoPage.po')


describe('Verifica Criar Processo', () => {
    beforeEach( () => Login.novo.click())

    it('Cria Processo Administrativo', () => {
        CriaProcesso.tipo.sendKeys('Compras')
        CriaProcesso.subTipo.click()
        CriaProcesso.escolheSubTipo.click()
        CriaProcesso.numDocumento.sendKeys(Faker.random.number())
        CriaProcesso.autoFisico.click()
        CriaProcesso.volumes.sendKeys('1')
        CriaProcesso.numeroFolhas.sendKeys('1')
        CriaProcesso.processoAssunto.sendKeys(Faker.random.words())
        CriaProcesso.btnNovo.click()
        CriaProcesso.autorInteressado.click()
        CriaProcesso.autorInteressado.sendKeys('Abadia ')
        ProtractorHelper.clickWhenClickable(CriaProcesso.escolheAutorInteressado)
        CriaProcesso.tipoInteresse.click()
        CriaProcesso.matricula.sendKeys(Faker.random.number({ min: 5000000, max: 9000000}))
        CriaProcesso.criarProcesso.click()

        ProtractorHelper.waitForElementVisibility(CriaProcesso.estrela)
        Helper.numeroProcesso.getText().then((numero) => DadosCadastradosHelper.numProcAdmin = numero)
        expect(CriaProcesso.estrela.isDisplayed()).toBeTruthy()
    })

    it('Cria Processo Administrativo - Sigiloso', () => {
        CriaProcesso.tipo.sendKeys('Compras')
        CriaProcesso.subTipo.click()
        CriaProcesso.escolheSubTipo.click()
        CriaProcesso.sigiloso.click()
        CriaProcesso.numDocumento.sendKeys(Faker.random.number())
        CriaProcesso.autoFisico.click()
        CriaProcesso.volumes.sendKeys('1')
        CriaProcesso.numeroFolhas.sendKeys('1')
        CriaProcesso.processoAssunto.sendKeys(Faker.random.words())
        CriaProcesso.btnNovo.click()
        CriaProcesso.autorInteressado.click()
        CriaProcesso.autorInteressado.sendKeys('Abadia ')
        ProtractorHelper.clickWhenClickable(CriaProcesso.escolheAutorInteressado)
        CriaProcesso.tipoInteresse.click()
        CriaProcesso.matricula.sendKeys(Faker.random.number({ min: 5000000, max: 9000000 }))
        CriaProcesso.criarProcesso.click()

        // Clica no alert
        browser.switchTo().alert().accept()
        ProtractorHelper.waitForElementVisibility(CriaProcesso.estrela)
        Helper.numeroProcesso.getText().then((numero) => DadosCadastradosHelper.numProcAdmSig = numero)
        expect(CriaProcesso.estrela.isDisplayed()).toBeTruthy()
    })

    it('Cria Processo Legislativo', () => {
        CriaProcesso.legi.click()
        CriaProcesso.tipo.sendKeys('Compras')
        CriaProcesso.subTipo.click()
        CriaProcesso.escolheSubTipo.click()
        CriaProcesso.autoFisico.click()
        CriaProcesso.volumes.sendKeys('1')
        CriaProcesso.numeroFolhas.sendKeys('1')
        CriaProcesso.processoAssunto.sendKeys(Faker.random.words())
        CriaProcesso.btnNovo.click()
        protractor.ExpectedConditions.visibilityOf(CriaProcesso.autorInteressado, 5000)
        CriaProcesso.autorInteressado.click()
        CriaProcesso.autorInteressado.sendKeys('Abadia ')
        ProtractorHelper.clickWhenClickable(CriaProcesso.escolheAutorInteressado)
        CriaProcesso.tipoInteresse.click()
        CriaProcesso.matricula.sendKeys('8012195')
        CriaProcesso.criarProcesso.click()

        ProtractorHelper.waitForElementVisibility(CriaProcesso.estrela)
        ProtractorHelper.clickWhenClickable(CriaProcesso.autuar)
        Helper.numeroProcesso.getText().then((numero) => DadosCadastradosHelper.numProcLegis = numero)
        expect(CriaProcesso.estrela.isDisplayed()).toBeTruthy()
    })
})