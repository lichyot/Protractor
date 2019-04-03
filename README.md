# Como executar o Protractor  
  
## 1) Instale o Protractor, caso não o tenha na máquina  
Para verificar se já está instalado:
```
protractor --version
```
Caso não exista o comando, para instalar execute:
```
npm install -g protractor
```
## 2) Atualize o WebDriver  
```
webdriver-manager update
```
## 3) Instale as dependências do teste  
```
cd test/e2e/
npm install
```
## 4) Defina as variáveis de ambiente para login (para o Terminal padrão do Mac)
```
vim ~/.bash_profile 
```
Acrescente no final do arquivo:
```
export PROTRACTOR_USUARIO="[seu usuário do AD de teste]"
export PROTRACTOR_SENHA="[sua senha do AD de teste]"
```
Saia do vim e atualize o arquivo editado:
```
source ~/.bash_profile 
```
## 5) Inicie o servidor rails na porta 3000 (padrão)
```
rails s
```
## 6) Execute o Protractor
Na pasta test/e2e (onde está o arquivo `protractor.conf.js`):
```
protractor
```

# Pré-requisitos para o teste

* Usuário deve ter os seguintes perfis do SGU no SGPD:
  * Todos os perfis
* Usuário deve ter permissão no SGPD para `Criar processo geral`.

# Testes Realizados
* Home
* Login
* Criar Processo
* Adicionar Anexo
* Despacha Processo
* Remessas
* Permissões por Pessoa
* Permissões por Lotação