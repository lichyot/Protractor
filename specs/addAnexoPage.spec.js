const AddAnexoPage = require('../page-objects/addAnexoPage.po')

describe('Verifica Criar Processo', () => {
    
    it('Adiciona Anexo no Processo Adm', () => {
        Helper.pesGeral.sendKeys(DadosCadastradosHelper.numProcAdmin).sendKeys(protractor.Key.ENTER)

        ProtractorHelper.tapWhenTappable(AddAnexoPage.anexo)
        ProtractorHelper.clickWhenClickable(AddAnexoPage.anexo)

        ProtractorHelper.clickWhenClickable(AddAnexoPage.btnAnexo)
        AddAnexoPage.pagInic.sendKeys('1')
        AddAnexoPage.pagFinal.sendKeys('2')
        Helper.insereArquivo.sendKeys(Helper.upload())
        AddAnexoPage.btnConfirma.click()
        ProtractorHelper.clickWhenClickable(Helper.btnConfModal)
        expect(AddAnexoPage.listaAnexo.isDisplayed()).toBeTruthy()
        expect(Helper.toastSucesso.isDisplayed()).toBeTruthy()
    })

    it('Edita Anexo', () => {
        ProtractorHelper.clickWhenClickable(AddAnexoPage.editAnexo)
        AddAnexoPage.descricao.clear()
        AddAnexoPage.descricao.sendKeys('PÁG. 1 À PÁG. 3')
        AddAnexoPage.btnConfirma.click()
        expect(Helper.toastSucesso.isDisplayed()).toBeTruthy()
    })

    // xit('Exlui Anexo', () => {
    //     CriaProcesso.exclAnexo.click()
    //     browser.switchTo().alert().accept()
    //     expect(Helper.toastSucesso.isDisplayed())
    // })
})