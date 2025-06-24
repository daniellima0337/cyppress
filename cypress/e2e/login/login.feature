Feature: Autenticação do usuário

  Scenario: Acesso com dados válidos
    Given Estou na página inicial do SauceDemo
    When Informo credenciais corretas
    Then Devo visualizar a página de produtos

  Scenario: Acesso com dados incorretos
    Given Estou na página inicial do SauceDemo
    When Informo credenciais inválidas
    Then Devo visualizar uma mensagem de erro

  Scenario: Encerrar sessão após login
    Given Já estou autenticado no sistema
    When Acesso o menu e seleciono sair
    Then Devo ser redirecionado para a tela de login
