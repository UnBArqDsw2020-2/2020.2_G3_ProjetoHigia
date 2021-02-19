# Especificação Suplementar

## Históricos de Revisões

|  Data  | Versão | Descrição | Autor(es) |
| :----: | :----: | :-------: | :-------: |
| 16/02/2021 | 1.0 | Criação da Especificação Suplementar | [Fellipe Araujo](https://github.com/fellipe-araujo) |

## Introdução

<p style="text-align: justify;"> &emsp;&emsp;
Uma especificação suplementar lista os requisitos não-funcionais do sistema. Junto com outras técnicas de modelagem e elicitação, é possível traçar um conjunto completo de requisitos do sistema. O projeto Hígia é um aplicativo de acesso público, que visa o fácil armazenamento e controle de documentos médicos (saúde), além de inovar o compartilhamento de informações e arquivos entre os pacientes e médicos. Logo abaixo, é possível ver os requisitos não-funcionais elicitados.
</p>

## [Requisitos Não Funcionais](./../02-requisitos/elicitacao/requisitosElicitados.md)

| Identificador | Requisito |
| :-----------: | :-------: |
| RNF-01 | O sistema deve ser consistente e padronizado |
| RNF-02 | O usuário deve ter controle e informação sobre o que acontece na aplicação |
| RNF-03 | O sistema deve estar disponível a qualquer momento para o usuário |
| RNF-04 | O sistema deve manter a segurança e privacidade do usuário |
| RNF-05 | O sistema deve ser acessível em dipositivos móveis |
| RNF-06 | O sistema deve ser descomplicado para fácil aprendizagem do usuário |
| RNF-07 | O sistema deve prevenir o usuário de ações indesejadas |

## Visão Geral

<p style="text-align: justify;"> &emsp;&emsp;
Este documento apresenta uma introdução ao Aplicativo Hígia a fim de deixar claro o escopo do projeto. Para isso, foi utilizado um modelo para classificação de atributos de qualidade de software, denominado FURPS+ (Funcionalidade, Usabilidade, Confiabilidade, Performance e Suportabilidade).
</p>

## Funcionalidades

<p style="text-align: justify;"> &emsp;&emsp;
O aplicativo Hígia deverá ser capaz de armazenar e controlar os dados/arquivos dos usuários. Um usuário paciente deve fornecer permissão de acesso ao usuário médico, para que este tenha acesso aos dados pessoais. A aplicação permitirá realizar essas ações de forma remota e instantânea. Além disso, será possível realizar o download de arquivos armazenados no app e realizar uma busca por pacientes (caso o usuário seja um médico). As funcionalidades já elicitadas até o momento podem ser encontradas na documentação de <a href="#./02-requisitos/elicitacao/requisitosElicitados">requisitos elicitados.</a>
</p>

## Usabilidade

<p style="text-align: justify;"> &emsp;&emsp;
O aplicativo deve ser simples para qualquer perfil de usuário que irá utilizar.
</p>

### Facilidade de Uso

<p style="text-align: justify;"> &emsp;&emsp;
Os usuários deverão ter facilidade em utilizar o aplicativo, não sendo necessário nenhum treinamento ou tutorial. As funcionalidades devem ser didáticas o suficiente, de forma que direcione o usuário por meio de ações simples a execução mais correta de uma tarefa.
</p>

### Mobile

<p style="text-align: justify;"> &emsp;&emsp;
O aplicativo é uma aplicação mobile, ou seja, é possível acessá-lo em dispositivos Android e IOS.
</p>

## Confiabilidade

<p style="text-align: justify;"> &emsp;&emsp;
O aplicativo deve saber lidar com falhas, fornencendo ao usuário feedbacks sobre o que ocorreu. Além disso, deve garantir ao usuário a segurança de seus dados.
</p>

### Tratamento de Falhas e Excessões

<p style="text-align: justify;"> &emsp;&emsp;
O sistema deve estar preparado para lidar (tratar) falhas. Algumas excessões podem ser lançadas na execução do aplicativo ou durante a ultilização de uma funcionalidade específica, excessões essas que não foram previstas no período de desenvolvimento do aplicativo. Com base nisso, o sistema deve informar ao usuário que determinada ação não foi realizada com sucesso e que é necessário tentar novamente. Em caso de alguma falha encontrada, o sistema deve ser capaz de reveter a ação que foi iniciada, mas que não foi finalizada com sucesso.
</p>

### Segurança de Dados

<p style="text-align: justify;"> &emsp;&emsp;
O sistema deve garantir a segurança dos dados do usuário. Um usuário médico deve solicitar a um usuário paciente a permissão de acesso aos seus respectivos dados. Caso o paciente negue a solicitação, seus dados permanecerão não compartilhados.
</p>

## Performance

<p style="text-align: justify;"> &emsp;&emsp;
O tempo de resposta de uma determinada ação deverá ser curta, dependendo da funcionalidade requisitada.
</p>

### Tempo de Resposta

<p style="text-align: justify;"> &emsp;&emsp;
É importante que o tempo de resposta para todas as ações realizadas no aplicativo seja curta. Para ações como, por exemplo, acesso da ficha médica em casos de emergência, o tempo de resposta deverá ser o mínimo possível.
</p>

## Suportabilidade

<p style="text-align: justify;"> &emsp;&emsp;
O aplicativo estará disponível em todas as plataformas: Android (4.1.x ou superior) e IOS (9.0 ou superior).
</p>

### Facilidade de Manutenção

<p style="text-align: justify;"> &emsp;&emsp;
A linguagem de programação utilizada no desenvolvimento do aplicativo deve ser de simples entendimento.
</p>

### Linguagem de Programação Única

<p style="text-align: justify;"> &emsp;&emsp;
Como o aplicativo será acessível em dispositivos Android e IOS, é importante a utilização de linguagem de programação e frameworks que não necessitem a escrita do mesmo código duas vezes. Uma vez implementada determinada funcionalidade, estará disponível para todas as plataformas mobile que irão utilizá-las.
</p>

## Referências

* [Uma Ferramenta de Apoio à Especificação de
Requisitos para Sistemas Autoadaptativos](http://dspace.unipampa.edu.br/bitstream/riu/875/1/Uma%20ferramenta%20de%20apoio%20%C3%A0%20especifica%C3%A7%C3%A3o%20de%20requisitos%20para%20sistemas%20autoadaptativos.pdf
) Acesso em: 16 de Fevereiro, 2021.

