# Léxicos
<p style="text-align: justify;"> &emsp;&emsp;
Léxico é definido como um conjunto dos vocábulos de uma língua, dispostos em ordem alfabética e com as respectivas significações. Uma notação na modelagem de requisitos que usa a descrição de termos via léxico é o LAL(Léxico Ampliado da Linguagem). Trata-se de uma técnica que descreve os símbolos de uma linguagem. Esses símbolos são descritos com noções e impactos. A noção significa o símbolo, que pode ser colocado no sentido denotativo da linguagem. Já o impacto, descreve o efeito/uso/ocorrência do símbolo na aplicação ou do efeito de algo na aplicação sobre o símbolo, que pode ser colocado no sentido conotativo da linguagem.
</p>

### Léxico 01 - Editar Informações
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Ação realizada por usuário. Usuário pode alterar medicamentos, alergias, exames, doenças e contato. | Verbo | Editar informações permite atualizar com informações mais recentes ou corrigir informações incorretas. | Configurar perfil, alterar dados. |

### Léxico 02 - Status da consulta
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Quando há uma consulta listada na aba de “minhas consultas”, pode possuir os estados marcada e realizada. | Estado | Consulta marcada e inserida na lista de consultas. | Situação da consulta. |

### Léxico 03 - Visualizar lista de exames
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Ação realizada pelo usuário. Permite ao usuário verificar os exames listados em seu perfil, com variações de estado, nome/tipo de exame além de opção de visualizar o exame específico e data que o exame foi realizado. | Verbo | Visualizar exames tanto passados quanto futuros. Observar cada exame detalhadamente. Verificar estado do exame. | Observar exames. Verificar Exames. |

### Léxico 04 - Status do exame
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Quando há uma consulta listada na aba de “resultados de exames”, pode possuir os estados pendentes e pronto. | Estado | Exame pendente de retorno do médico. Há registro de um novo exame. Exame pronto e disponível para visualização. | Situação do exame. Resultado do exame. |

### Léxico 05 - Buscar Paciente
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Ação realizada por usuários médicos. Permite ao médico buscar na base de dados pacientes utilizando CPF como filtro. | Verbo | Visualizar informações básicas. Permite ao médico ver informações do paciente e se desejar ver exames/consultas é necessário pedir permissão. | Procurar paciente. |

### Léxico 06 - Status de pedido de permissão
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Quando há solicitação de permissão do médico para visualizar exames/consultas do paciente. Pode possuir dois estados, negado e aprovado. | Estado | Médico pode visualizar exames e consultas do paciente. Médico não pode olhar exames e consultas do paciente. | Situação da solicitação. |

### Léxico 07 - Fazer login
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Ação realizada por usuário qualquer. Pode se logar como médico ou paciente. | Verbo | Email e senha inseridos são corretos, login é realizado com sucesso. Email e senha inseridos são incorretos ou não existem, login não é realizado com sucesso. | Entrar no aplicativo. Autenticação de usuário. |

### Léxico 08 - Status de login
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Estado que o usuário se encontra após realizar login. Possui duas possibilidades diferentes, médico e paciente. | Estado | Usuário está logado como paciente. | - |

### Léxico 09 - Visualizar consultas
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Ação realizada pelo usuário. O paciente pode visualizar detalhes de suas consultas como, por exemplo, o médico que o atendeu, a especialidade do médico, data e status da consulta (se já foi realiza ou não). | Verbo | Visualizar consultas permite o usuário ficar atualizado sobre consultas realizadas e agendadas. | Verificar consultas, observar. |

### Léxico 10 - Baixar receitas
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Ação realizada pelo usuário. O paciente baixar a(s) receita(s) (caso tenha) de uma consulta. | Verbo | Baixar receitas permite o usuário a ter acesso a receitas, assim como visualizar dados que foram receitados. Baixar arquivo PDF da receita. | Salvar receitas. |

### Léxico 11 - Buscar pacientes
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Ação realizada pelo médico. Ele pode buscar um usuário através do CPF do mesmo para informações sobre consultas, resultado de exames e ficha médica. | Verbo | Buscar pacientes permite ao médico buscar informações específicas de um paciente. | Pesquisar paciente, procurar. |

### Léxico 12 - Visualizar ficha médica
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Ação realizada pelo usuário. O paciente pode visualizar a sua ficha médica. O médico pode visualizar a ficha médica de qualquer paciente. | Verbo | Visualizar ficha médica permite o usuário ter um acesso rápido a informações importantes como, por exemplo, tipo sanguíneo, problemas de saúde, alergias, contatos de emergências, entre outros. | Verificar ficha médica, observar. |

### Léxico 13 - Conceder permissão de acesso
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Ação realizada pelo paciente. O paciente pode escolher dar acesso aos seus dados pelo médico ou não. Esses dados são consultas, resultados de exames, entre outros. | Verbo | Conceder permissão de acesso permite ao paciente compartilhar seus próprios dados com o médico. | Fornecer permissão, autorizar, outorgar. |

### Léxico 14 - Solicitar permissão de acesso
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Ação realizada pelo médico. O médico pode fazer uma solicitação para um determinado paciente para ter acesso a certos dados do mesmo. | Verbo | Solicitar permissão de acesso permite ao médico ter a possibilidade de acessar dados do paciente. | Requerer permissão, requisitar, pedir. |

### Léxico 15 - Realizar cadastro
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Ação realizada pelo usuário. O usuário pode realizar o cadastro no aplicativo informando dados como, por exemplo, nome, data de nascimento, CPF, CRM (caso seja médico), altura, peso, e os respectivos dados da ficha médica. | Verbo | Realizar o cadastro permite ao usuário ter acesso ao aplicativo para obter informações como suas consultas, resultados de exames e ficha médica (caso seja um paciente), e ter acesso a outros pacientes, fornecer receitas (caso seja um médico). | - |

### Léxico 16 - App mobile
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Software desenvolvido para utilização em smartphones e adquirido através de lojas virtuais de aplicativos mobile. | Objeto | Cadastrar usuário paciente ou médico. Verificar ficha médica. | Aplicativo |

### Léxico 17 - Requisito Funcional
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Especificação que representa o que o software faz como tarefas ou serviços. | Objeto | São coletados via elicitação por múltiplas técnicas. Necessário priorização. | Funcionalidade |

### Léxico 18 - Requisito Nâo Funcional
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Especificações que indicam como o software realizará uma atividade ao invés de indicar o que fazer. | Objeto | Impacta a experiência do usuário. Grande diferencial para manter usuários. | Experiência de usuário. |

### Léxico 19 - Arquivo PDF
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Formato de arquivo seguro e prático de exibição e compartilhamento de informações. | Objeto | Os pacientes recebem arquivos baixados no formato PDF. | - |

### Léxico 20 - Desenvolvedor
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Pessoa ou equipe de pessoas encarregadas e responsáveis por desenvolver o software. | Objeto | O desenvolvedor é o diferencial para o grau de funcionamento e polidez de uma aplicação. | Programador, Dev. |

### Léxico 21 - Consulta
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Refere-se ao atendimento entre um paciente e um médico. | Objeto | É realizado entre um paciente e um médico, no qual pode gerar receitas. | - |

### Léxico 22 - Exame
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Refere-se ao ato de analisar determinado aspecto do paciente. | Objeto | É realizado para se obter uma observação minuciosa da saúde do paciente. | Análise, observação. |

### Léxico 23 - Ficha médica
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Refere-se a dados de suma importância a respeito do usuário. | Objeto | A ficha médica contém dados relevantes que podem ser obtidos em situações de emergência. | Prontuário |

### Léxico 24 - Paciente
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Pessoa que que pode estar sob cuidados médicos por um profissional da área de saúde. | Objeto | O paciente tem o papel de ser examinado ou cuidado por um médico. | - |

### Léxico 25 - Médico
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| Profissional da saúde que é autorizado pelo Estado a exercer a medicina. | Objeto | O médico tem o papel de cuidar da saúde humana prevenindo, diagnosticando, tratando doenças, entre outros deveres. | Profissional da saúde. |

### Léxico 26 - CRM
| Noção | Classificação | Impacto | Sinônimos |
| :---: | :-----------: | :-----: | :-------: |
| É um número que o profissional adquire para realizar a inscrição no Conselho Regional de Medicina. | Objeto | O médico deve possuir um CRM e apresentá-lo de forma visível como, por exemplo, no carimbo. | - |

## Referências
* http://www.nilc.icmc.usp.br/til/til2006/0030.pdf

## Históricos de Revisões
|    Data    |  Versão  |         Descrição           |                   Autor(es)                      |
| :--------: | :------: | :-------------------------: | :----------------------------------------------: |
| 11/02/2021 |   1.0    |     Criação dos Léxicos     |         [Fellipe Araujo](https://github.com/fellipe-araujo) e [Gabriel Hussein](https://github.com/GabrielHussein)         |