# Requisitos Elicitados


## Históricos de versões

|    Data    | Versão |                   Descrição                   | Autor(es)                                                                                                                                         |
| :--------: | :----: | :-------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14/02/2021 |  1.0   | Criação do documento de requisitos elicitados | [Aline Lermen](https://github.com/AlineLermen), [Danillo Souza](https://github.com/DanilloGS), [Ithalo Azevedo](https://github.com/ithaloazevedo) |

## Introdução

Neste documento são apresentados os requisitos funcionais (RF) e não-funcionais (RNF), elicitados através das técnicas de Brainstorming, Personas, Questionário e Storyboard.

### Legenda

Siglas da coluna "Backward From":

- B : [Brainstorming](./02-requisitos/elicitacao/brainstorming.md)
- P : [Personas](./02-requisitos/elicitacao/personas.md)
- Q : [Questionários](./02-requisitos/elicitacao/questionario.md)
- S : [Storyboards](./02-requisitos/elicitacao/storyboard.md)

## Requisitos Funcionais

| Identificador |                                                   Requisito                                                   |                                                                                         Backward From                                                                                         |
| :-----------: | :-----------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     RF-01     |                       O usuário deve ser capaz de realizar seu cadastro como paciente.                        |                                                                       [B](./02-requisitos/elicitacao/brainstorming.md)                                                                        |
|     RF-02     |                    Um médico deve ser capaz de realizar seu cadastro como usuário médico.                     |                                                                       [B](./02-requisitos/elicitacao/brainstorming.md)                                                                        |
|     RF-03     |            O usuário médico deve ser capaz de solicitar a visualização de arquivos de um paciente.            |                                                [B](./02-requisitos/elicitacao/brainstorming.md), [S](./02-requisitos/elicitacao/storyboard.md)                                                |
|     RF-04     |               O usuário paciente deve poder aceitar a solicitação de acesso do usuário médico.                |                                                [B](./02-requisitos/elicitacao/brainstorming.md), [S](./02-requisitos/elicitacao/storyboard.md)                                                |
|     RF-05     |                               O usuário deve poder visualizar sua ficha médica.                               | [B](./02-requisitos/elicitacao/brainstorming.md), [P](./02-requisitos/elicitacao/personas.md), [Q](./02-requisitos/elicitacao/questionario.md), [S](./02-requisitos/elicitacao/storyboard.md) |
|     RF-06     |                     O usuário deve ser capaz de adicionar informações à sua ficha médica.                     | [B](./02-requisitos/elicitacao/brainstorming.md), [P](./02-requisitos/elicitacao/personas.md), [Q](./02-requisitos/elicitacao/questionario.md), [S](./02-requisitos/elicitacao/storyboard.md) |
|     RF-07     |                      O usuário deve ser capaz de editar informações da sua ficha médica.                      | [B](./02-requisitos/elicitacao/brainstorming.md), [P](./02-requisitos/elicitacao/personas.md), [Q](./02-requisitos/elicitacao/questionario.md), [S](./02-requisitos/elicitacao/storyboard.md) |
|     RF-08     |                     O usuário deve ser capaz de remover informações da sua ficha médica.                      |                        [B](./02-requisitos/elicitacao/brainstorming.md), [P](./02-requisitos/elicitacao/personas.md), [Q](./02-requisitos/elicitacao/questionario.md)                         |
|     RF-09     |                        O usuário médico deve ser capaz de procurar pacientes pelo CPF.                        |                                                 [B](./02-requisitos/elicitacao/brainstorming.md), [P](./02-requisitos/elicitacao/personas.md)                                                 |
|     RF-10     |            O usuário médico deve ser capaz de visualizar informações da ficha médica do paciente.             |                         [B](./02-requisitos/elicitacao/brainstorming.md), [S](./02-requisitos/elicitacao/storyboard.md), [P](./02-requisitos/elicitacao/personas.md)                          |
|     RF-11     |                                     O usuário deve poder realizar Logoff.                                     |                                                                       [B](./02-requisitos/elicitacao/brainstorming.md)                                                                        |
|     RF-12     | O usuário deve receber notificação assim que for solicitado permissão para acessar sua ficha médica completa. |                                                                       [B](./02-requisitos/elicitacao/brainstorming.md)                                                                        |
|     RF-13     |                    O usuário deve ser capaz de realizar o download de exames cadastrados.                     | [B](./02-requisitos/elicitacao/brainstorming.md), [P](./02-requisitos/elicitacao/personas.md), [Q](./02-requisitos/elicitacao/questionario.md), [S](./02-requisitos/elicitacao/storyboard.md) |
|     RF-14     |                            O usuário deve ser capaz de fazer upload novos exames.                             | [B](./02-requisitos/elicitacao/brainstorming.md), [P](./02-requisitos/elicitacao/personas.md), [Q](./02-requisitos/elicitacao/questionario.md), [S](./02-requisitos/elicitacao/storyboard.md) |
|     RF-15     |                      O usuário deve ser capaz de editar exames previamente cadastrados.                       |                        [B](./02-requisitos/elicitacao/brainstorming.md), [P](./02-requisitos/elicitacao/personas.md), [Q](./02-requisitos/elicitacao/questionario.md)                         |
|     RF-16     |                              O usuário deve ser capaz apagar exames cadastrados.                              |                        [B](./02-requisitos/elicitacao/brainstorming.md), [P](./02-requisitos/elicitacao/personas.md), [Q](./02-requisitos/elicitacao/questionario.md)                         |
|     RF-17     |                                 O usuário médico deve ser validado pelo CRM.                                  |                                                                       [B](./02-requisitos/elicitacao/brainstorming.md)                                                                        |
|     RF-18     |                                  O usuário comum deve ser validado pelo CPF.                                  |                                                                       [B](./02-requisitos/elicitacao/brainstorming.md)                                                                        |
|     RF-19     |                  O usuário deve ser capaz de apagar todos os seus dados dentro da aplicação.                  |                                                                       [B](./02-requisitos/elicitacao/brainstorming.md)                                                                        |

## Requisitos Não Funcionais

| Identificador |                                 Requisito                                  |                                                                Backward From                                                                 |
| :-----------: | :------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------: |
|    RNF-01     |                O sistema deve ser consistente e padronizado                |                                                 [P](./02-requisitos/elicitacao/personas.md)                                                  |
|    RNF-02     | O usuário deve ter controle e informação sobre o que acontece na aplicação | [B](./02-requisitos/elicitacao/brainstorming.md), [P](./02-requisitos/elicitacao/personas.md), [S](./02-requisitos/elicitacao/storyboard.md) |
|    RNF-03     |     O sistema deve estar disponível a qualquer momento para o usuário      |                          [P](./02-requisitos/elicitacao/personas.md), [S](./02-requisitos/elicitacao/storyboard.md)                          |
|    RNF-04     |         O sistema deve manter a segurança e privacidade do usuário         |                                               [B](./02-requisitos/elicitacao/brainstorming.md)                                               |
|    RNF-05     |             O sistema deve ser acessível em dipositivos móveis             |                          [P](./02-requisitos/elicitacao/personas.md), [S](./02-requisitos/elicitacao/storyboard.md)                          |
|    RNF-06     |    O sistema deve ser descomplicado para fácil aprendizagem do usuário     |                                                 [P](./02-requisitos/elicitacao/personas.md)                                                  |
|    RNF-07     |           O sistema deve prevenir o usuário de ações indesejadas           |                                                 [P](./02-requisitos/elicitacao/personas.md)                                                  |

## Referência

- Projeto Recipe Buk: https://www.recipebukdocs.tk/#/02-requisitos/elicitacao/tabela_requisitos. Último acesso em: 14/02/2021.
- Projeto Stock: https://unbarqdsw.github.io/2020.1_G12_Stock/#/Elicitation/RequisitosElicitados. Ultimo acesso em: 14/02/2021.
- 10 heuristicas de Nielsen: https://brasil.uxdesign.cc/10-heurísticas-de-nielsen-para-o-design-de-interface-58d782821840. Ultimo acesso em: 14/02/2021.

