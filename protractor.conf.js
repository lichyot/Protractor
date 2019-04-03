
'use strict'

const SpecReporter = require('jasmine-spec-reporter').SpecReporter

module.exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true, // Dispensa o uso do seleniumAddress, apenas para Chrome e Firefox
    allScriptsTimeout: 30000, // Esperar todos os carregamentos ajax na tela de chefe exige timeout maior
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            args: [
                // '--headless',
                '--no-sandbox',
                '--disable-gpu',
                '--test-type=browser',
                "--window-size=1900,1200",
            ], // Remove warning de --ignore-certificate
            prefs: {
                'download': { // Faz o Chrome baixar o arquivo sem perguntar onde salvar e determina a pasta de download
                    'prompt_for_download': false,
                    'default_directory': './download/',
                }
            }
        }
    },
    // Lista as specs na ordem de execução
    specs: [
            'specs/home.spec.js',
            'specs/login.spec.js',
            'specs/permissaoPessoa.spec.js',
            'specs/permissaoLotacao.spec.js',
            'specs/criaProcessoPage.spec.js',
            'specs/addAnexoPage.spec.js',
            'specs/despachaProcesso.spec.js',
            'specs/remessaPage.spec.js'
           ],
    baseUrl: 'http://localhost:3000',
    resultJsonOutputFile: 'resultado-protractor.json', // Salva o resultado dos testes em JSON
    onPrepare() {

        // Helper geral do sistema
        global.Faker            = require('faker')
        global.Helper           = require('./helpers/helper')
        global.ProtractorHelper = require('protractor-helper')

        global.DadosCadastradosHelper = require('./helpers/dadosCadastradosHelper')

        browser.waitForAngularEnabled(false)
        
        if (browser.params.protractorFailFast || process.env.PROTRACTOR_FAIL_FAST) {
            // Na primeira falha, ele interrompe os testes
            const failFast = require('jasmine-fail-fast')
            jasmine.getEnv().addReporter(failFast.init())
        }
        
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailedSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
        }))

        browser.takeScreenshot() // gambiarra para dar foco na janela de teste
    }
}