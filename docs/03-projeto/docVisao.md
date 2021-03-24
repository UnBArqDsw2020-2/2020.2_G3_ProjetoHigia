# Documento de visão

## Histórico de versionamento
|    Data    | Versão |      Descrição       |                                                                         Autor(es)                                                                         |
| :--------: | :----: | :------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: |
| 24/03/2021 |  1.0   | Criação do documento | [Aline Lermen](https://github.com/AlineLermen), [Ithalo Azevedo](https://github.com/ithaloazevedo) e [Victor Cerqueira](https://github.com/VictorAmaralC) |

## 1. Introdução
### 1.1 Propósito
O presente documento visa definir e apresentar as características gerais e específicas do projeto Hígia, esclarecendo seu objetivo, utilidade e funcionamento. Dessa forma, será possível o entendimento do leitor sobre os tópicos abordados, mesmo que não possua conhecimento de detalhes técnicos referentes à execução desse software.

### 1.2 Escopo
Este documento descreve os aspectos gerais necessários ao entendimento do produto, desde a elaboração até a implantação, além de apresentar características detalhadas de alguns tópicos relacionados à utilização do software.

### 1.3 Definições, acrônimos e abreviações
| Acrônimos/Abreviação | Definição                         |
| :------------------- | :-------------------------------- |
| UnB                  | Universidade de Brasília          |
| ADS                  | Arquitetura e Desenho de Software |
| App                  | Aplicativo                        |

### 1.4 Referências
IBM Knowledge Center - Documento de Visão: A estrutura de tópicos do documento de visão. Disponível em: https://www.ibm.com/support/knowledgecenter/pt-br/SSYMRC_6.0.5/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.html. Acesso em: 24 mar. 2021

### 1.5 Visão Geral
Este documento apresenta a visão do projeto Hígia, descrevendo sua ideia geral e expondo tópicos que especificam a descrição e posicionamento do produto. Também são identificadas as partes constituintes do projeto (partes interessadas e usuários) e apresentados os recursos e restrições que envolvem o uso do produto.


## 2. Posicionamento
### 2.1 Oportunidade de negócios
Em 2020, com a pandemia do Covid-19, a telemedicina se popularizou e se tornou mais evidente. O número de consultas online e compartilhamento de arquivos de forma digital aumentou drasticamente. Para apoiar isso, o Hígia visa facilitar o controle dos arquivos médicos pelos pacientes e inovar o compartilhamento de arquivos e informações entre pacientes e médicos.

### 2.2 Instrução do problema 
O problema de armazenar e compartilhar arquivos e informações médicas, afeta profissionais da saúde e pessoas em geral. O impacto do problema é perda de informações ao longo do tempo, dificuldade em encontrar exames, receitas, cartões de vacina e outros documentos antigos, dificuldade de compartilhar documentos com médicos. Uma solução bem sucedida incluiria um sistema capaz de armazenar todas as informações de um paciente, permitir o controle do usuário sobre seus arquivos médicos e facilitar a obtenção de informações de forma imediata por parte de médicos e otimizar o compartilhamento de arquivos entre médicos e pacientes.

### 2.3 Instrução da posição do produto
Para médicos e pacientes em geral que queiram otimizar o compartilhamento de arquivos e informações e controlar de forma fácil e simples seus dados. O Hígia é um app mobile para armazenar arquivos médicos (Histórico de exames em geral; Cirurgias realizadas; Remédios controlados e afins) do paciente, além de compartilhar informações pertinentes para o médico em situações de emergência.

## 3. Descrições da parte interessada
Esta seção fornece um perfil das partes interessadas e usuários que estão envolvidos no projeto. Esta seção também identifica os principais problemas que as partes interessadas e os usuários consideram que a solução proposta deva tratar.

### 3.1 Resumo dos envolvidos
| Nome                      | descrição                                                | Responsabilidade                                                                                                                              |
| ------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Equipe de Desenvolvimento | Grupo de alunos da UnB matriculados na disciplina de ADS | Gerenciar a equipe, executar o planejamento garantindo a comunicação entre os membros e realizar o desenvolvimento e implementação do produto |
| Cliente                   | Monitores e Professora da disciplina                     | Apresentar possíveis problemas, expor informações e demandas do projeto e acompanhar o andamento do mesmo para validações nescessárias        |

### 3.2 Resumo dos usuários
| Nome            | Descrição                                                                          |
| --------------- | ---------------------------------------------------------------------------------- |
| População geral | Pessoas que pretendem manter consigo um método de acesso rápido a sua ficha médica |

### 3.3 Ambiente do usuário
Para a utilização do software é nescessário um dispositivo móvel, podendo esse ser tanto Android quanto IOS.

### 3.4 Perfis dos Envolvidos
#### 3.4.1 Equipe de desenvolvimento
| Representantes                                                                                            | Descrição                   | Tipo                    | Critérios de sucesso                                                       | Envolvimento | Problemas                                                                                                                                              |
| --------------------------------------------------------------------------------------------------------- | --------------------------- | ----------------------- | -------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Aline Lermen, Arthur Paiva, Danillo Souza, Fellipe Araujo, Gabriel Hussein, Ithalo azevedo, Victor Amaral | Desenvolvedores de Software | Discentes da disciplina | Completar as entregas propostas cumprindo os prazos e qualidade do produto | Alto         | Equipe nova, falta de sintonia entre integrantes, horários conflitantes e alguns integrantes com pouco conhecimento das ferramentas a serem utilizadas |

#### 3.4.2 Cliente
| Representantes                | Descrição                                               | Tipo                            | Critérios de sucesso | Envolvimento | Problemas |
| ----------------------------- | ------------------------------------------------------- | ------------------------------- | -------------------- | ------------ | --------- |
| Milene Serrano e Ésio Freitas | Responsável por acompanhar o desenvolvimento do projeto | Docente e monitor da disciplina | -                    | Médio        | -         |

### 3.5 Perfis dos Usuários
#### 3.5.1 População geral 
| Representantes                | Descrição                                             | Tipo | Critérios de sucesso           | Envolvimento | Problemas |
| ----------------------------- | ----------------------------------------------------- | ---- | ------------------------------ | ------------ | --------- |
| Pessoas com dispositivo móvel | Pessoas que pretendem manter uma ficha médica consigo | -    | Conseguir registrar seus dados | Baixo        | -         |

### 3.6 Alternativas e concorrência
#### 3.6.1 App Saúde (Somente em IOS)
O App Saúde presente nos dispositivos IOS tem a opção de motar um resumo de ficha médica, entretanto falta informações mais específicas sobre a pessoa e o aplicativo está presente apenas em dispositivos Apple.

## 4. Visão geral do produto
### 4.1 Perspectiva do Produto
O projeto Hígia busca fornecer um sistema que auxilie profissionais da saúde e pacientes com recursos que facilitam o compartilhamento de informações e arquivos médicos. Além disso, o sistema terá o recurso de apresentar para o profissional da saúde os dados relevantes de um paciente. Assim, em caso de emergência, o acesso a informações importantes poderá ser agilizado. 

### 4.2 Resumo das Capacidades

| Beneficiado                     | Benefício                                                                          | Recurso      | Descrição                                                                                                                                                    |
| :------------------------------ | ---------------------------------------------------------------------------------- | :----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Paciente, profissional da saúde | Mais agilidade em caso de emergência                                               | Ficha médica | A ficha médica contém informações relevantes sobre o paciente, as quais o profissional de saúde pode acessar com o recurso de busca de pacientes pelo CPF    |
| Profissional da saúde           | Facilidade em contatar o contato de emergência do paciente                         | Ficha médica | Na ficha médica há a seção de contato de emergência do paciente, sendo assim de fácil acesso                                                                 |
| Paciente                        | Maior organização de requisições e resultados de exame, arquivos médicos no geral  | Arquivos     | Com a opção de fazer uploads de arquivos, o paciente pode possuir um local único para armazenar os documentos                                                |
| Paciente                        | Facilidade no transporte e apresentação dos resultados de exames do paciente       | Arquivos     | Com a opção de armazenar os arquivos no aplicativo, o paciente poderá levar seus documentos a qualquer lugar, sem precisar carregar consigo papéis físicos   |
| Profissional da saúde           | Facilidade no acesso do profisisonal da saúde aos resultados de exames do paciente | Arquivos     | Com a opção de compartilhamento de arquivos no aplicativo, o profissional poderá solicitar acesso aos documentos do paciente, resultando em um acesso rápido |
