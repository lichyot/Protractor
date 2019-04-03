const DespachaProcesso = require('../page-objects/despachaProcesso.po')


describe('Verifica Despacha Processo', () => {

    it('Despacha Processo', () => {
        ProtractorHelper.clickWhenClickable(Helper.criaRemessa)
        ProtractorHelper.waitForElementVisibility(DespachaProcesso.formDespacha)
        ProtractorHelper.clickWhenClickable(DespachaProcesso.marcados)
        DespachaProcesso.lotacao.sendKeys('Sistema')
        ProtractorHelper.clickWhenClickable(DespachaProcesso.escolheLotacao)
        
        DespachaProcesso.pessoa.click()
        ProtractorHelper.clickWhenClickable(DespachaProcesso.escolhePessoa)
        DespachaProcesso.dataLimite.click().sendKeys(protractor.Key.ENTER)
        DespachaProcesso.resumo.sendKeys(Faker.random.words())
        DespachaProcesso.enviarRemessa.click()
        ProtractorHelper.waitForElementVisibility(Helper.btnConfModal)
        ProtractorHelper.clickWhenClickable(Helper.btnConfModal)
        ProtractorHelper.clickWhenClickable(Helper.toastSucesso)
        ProtractorHelper.waitForElementVisibility(Helper.toastSucesso)
        expect(Helper.toastSucesso.isDisplayed()).toBeTruthy()
    })
})

