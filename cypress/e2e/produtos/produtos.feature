Feature: Catálogo de produtos

  Scenario: Listar produtos após autenticação
    Given Usuário autenticado no sistema
    Then Deve ser exibida a lista de produtos disponíveis

  Scenario: Acessar página de um produto
    Given Usuário autenticado no sistema
    When Seleciona um item da lista
    Then Deve visualizar os detalhes do produto

  Scenario Outline: Aplicar ordenação na listagem
    Given Usuário autenticado no sistema
    When Aplica ordenação por "<criterio>"
    Then A lista deve refletir a ordem aplicada corretamente

    Examples:
      | criterio              |
      | Name (A to Z)         |
      | Name (Z to A)         |
      | Price (low to high)   |
      | Price (high to low)   |
