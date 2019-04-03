const Remessas = require('../page-objects/remessaPage.po')


describe('Verifica Remessas', () => {
    beforeAll(() => Remessas.remessa.click())

    it('Minhas Remessas', () => {
        ProtractorHelper.waitForElementVisibility(Remessas.exibir)

        expect(Remessas.exibir.isDisplayed()).toBeTruthy()
        expect(Remessas.excluir.isDisplayed()).toBeTruthy()
        expect(Helper.paginacao.isDisplayed()).toBeTruthy()
    })

    it('Exlui Remessa', () => {
        ProtractorHelper.clickWhenClickable(Remessas.excluir)
        // Clica no alert
        browser.switchTo().alert().dismiss()
        ProtractorHelper.clickWhenClickable(Remessas.exibir)
        ProtractorHelper.clickWhenClickable(Remessas.btnCancelarRemessa)
        browser.switchTo().alert().accept()

        expect(Helper.toastSucesso.isDisplayed()).toBeTruthy()
    })

    it('Visualiza Remessa', () => {
        ProtractorHelper.clickWhenClickable(Remessas.exibir)

        expect(Helper.inAlert.isDisplayed()).toBeTruthy()

        ProtractorHelper.clickWhenClickable(Remessas.btnVoltar)
    })

    it('Imprimir Remessa', () => {
        ProtractorHelper.clickWhenClickable(Remessas.exibir)

        ProtractorHelper.clickWhenClickable(Remessas.imprimirRemessa)

        browser.getAllWindowHandles().then((handles) => {
        browser.switchTo().window(handles[1]); // Muda o foco para a nova aba
        
            expect(browser.getCurrentUrl()).toContain('/despachos/remessa.pdf?')

        browser.close(); // Fecha a nova aba
        browser.switchTo().window(handles[0]); // Volta o foco para a aba original
        })
    })
})