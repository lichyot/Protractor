const PermissaoPessoaPage = require('../page-objects/permissaoPessoa.po')

describe('Verifica Criar Permissão Pessoa', () => {
    beforeEach(() => PermissaoPessoaPage.permissaoPessoa.click())

    it('Forçando Erro ao Criar - Permissão Pessoa', () => {
        ProtractorHelper.clickWhenClickable(PermissaoPessoaPage.novaPermissao)
        ProtractorHelper.clickWhenClickable(PermissaoPessoaPage.salvar)
        
        ProtractorHelper.waitForElementVisibility(PermissaoPessoaPage.erro)
        
        expect(PermissaoPessoaPage.erro.isPresent()).toBeTruthy()
        PermissaoPessoaPage.voltar.click()
    })

    it('Cria - Permissão Pessoa', () => {
        ProtractorHelper.clickWhenClickable(PermissaoPessoaPage.novaPermissao)
        ProtractorHelper.clickWhenClickable(PermissaoPessoaPage.escolhePermissao)

        Helper.nomeUsuarioLogado.getText().then( (nome) => {
                DadosCadastradosHelper.nomeUsuario = nome 
            ProtractorHelper.clickWhenClickable(element(by.cssContainingText('option', DadosCadastradosHelper.nomeUsuario)))
        })
        
        ProtractorHelper.clickWhenClickable(PermissaoPessoaPage.salvar)

        expect(Helper.toastSucesso.isDisplayed()).toBeTruthy()
    })
})