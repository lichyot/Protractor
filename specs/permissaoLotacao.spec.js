const PermissaoLotacaoPage = require('../page-objects/permissaoLotacao.po')

describe('Verifica Criar Permissão Lotação', () => {
    beforeEach(() => PermissaoLotacaoPage.permissaoLotacao.click())

    it('Forçando Erro ao Criar - Permissão Lotação', () => {
        ProtractorHelper.clickWhenClickable(PermissaoLotacaoPage.novaPermissao)
        ProtractorHelper.clickWhenClickable(PermissaoLotacaoPage.salvar)

        ProtractorHelper.waitForElementVisibility(PermissaoLotacaoPage.erro)

        expect(PermissaoLotacaoPage.erro.isPresent()).toBeTruthy()
        PermissaoLotacaoPage.voltar.click()
    })

    it('Cria - Permissão Lotação', () => {
        ProtractorHelper.clickWhenClickable(PermissaoLotacaoPage.novaPermissao)

        ProtractorHelper.clickWhenClickable(PermissaoLotacaoPage.escolhePermissao)
        PermissaoLotacaoPage.lotacao.sendKeys('Criar processo geral')
        ProtractorHelper.clickWhenClickable(PermissaoLotacaoPage.salvar)

        expect(Helper.toastSucesso.isDisplayed()).toBeTruthy()
    })
})