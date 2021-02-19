# Cenários

## Históricos de Revisões

|    Data    | Versão |        Descrição        |                                                                         Autor(es)                                                                         |
| :--------: | :----: | :---------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: |
| 14/02/2020 |  1.0   |  Criação do documento.  | [Arthur Paiva](https://github.com/ArthurPaivaT), [Gabriel Hussein](https://github.com/GabrielHussein), [Ithalo Azevedo](https://github.com/ithaloazevedo) |
| 15/02/2020 |  1.1   | Adição das referências. |                                                    [Ithalo Azevedo](https://github.com/ithaloazevedo)                                                     |

## Introdução

<p style="text-align: justify;"> &emsp;&emsp;
Um cenário é uma estratégia reconhecida para compreender as interações entre ambiente e sistema, bem como elicitar a parte comportamental do software, sua dinâmica e/ou seu fluxos,apresentando os envolvidos e como eles interagem como o sistema, em uma tentativa de demonstrar de forma mais dinâmica como os requisitos levantados aparecem no aplicativo.
</p>

## Cenário 01 - Cadastro de Médico

|     |  |  |
| --- || --------------------------- |
| Objetivo | | Cadastro de um médico no App |
| Contexto | | Local: Tela inicial ao entrar na aplicação pela primeira vez <br /> Tempo: Dois a Cinco minutos <br /> Pré-condição: Possuir CRM e CPF Válido |
| Atores | | Usuário com Login ativo |
| Recursos | | Internet <br /> Smartphone <br /> CRM Válido <br /> CPF Válido <br /> App Hígia instalado |
| Episódios | | Usuário novo <br /> Usuário acessa o app pela primeira vez <br /> Usuário insere dados de entrada e informações pessoais <br /> Usuário insere o CRM <br /> Usuário finaliza e confirma o cadastro |
| Episódios Alternativos | | Não existe episódio alternativo |
| Restrição | | Internet Indisponível |

## Cenário 02 - Cadastro de Paciente

|     |  |  |
| --- || --------------------------- |
| Objetivo | | Cadastro de um médico no App |
| Contexto | | Local: Tela inicial ao entrar na aplicação pela primeira vez <br /> Tempo: Dois a Cinco minutos <br /> Pré-condição: CPF válido |
| Atores | | Usuário ainda não cadastrado |
| Recursos | | Internet <br /> Smartphone <br /> CPF Válido <br /> App Hígia instalado |
| Episódios | | Usuário novo <br /> Usuário acessa o app pela primeira vez <br /> Usuário insere dados de entrada e informações pessoais <br /> Usuário finaliza e confirma o cadastro |
| Episódios Alternativos | | Não existe episódio alternativo |
| Restrição | | Internet Indisponível |

## Cenário 03 - Efetuar Login

|     |  |  |
| --- || --------------------------- |
| Objetivo | | Realizar login no app |
| Contexto | |Local: Tela inicial <br /> Tempo: 30 segundos a 1 minuto <br /> Pré-condição: Já ter realizado o cadastro. |
| Atores | | Usuário paciente e usuário médico. |
| Recursos | | Internet <br /> Smartphone <br /> App Hígia instalado |
| Episódios | | Usuário acessa o app <br /> Usuário insere os dados de login <br /> Usuário confirma o login <br /> Login efetuado |
| Episódios Alternativos | | Usuário acessa o app <br /> Usuário insere os dados de login <br /> Usuário confirma o login <br /> Sistema retorna mensagem “A senha informada está incorreta”. |
| Restrição | | Internet Indisponível <br /> Usuário Não Cadastrado|

## Cenário 04 - Edição de Perfil

|     |  |  |
| --- || --------------------------- |
| Objetivo | | Editar informações do perfil |
| Contexto | | Local: Tela inicial após realizar login <br /> Tempo: Dois a dez minutos <br /> Pré-condição: Estar logado |
| Atores | | Usuário logado |
| Recursos | | Internet <br /> Smartphone <br /> Conta Cadastrada <br /> App Hígia instalado |
| Episódios | | Usuário acessa o app <br /> UUsuário seleciona o botão de edição de perfil <br /> Usuário altera as informações que desejar <br /> Usuário confirma e salva as mudanças |
| Episódios Alternativos | | Usuário cancela alterações pendentes |
| Restrição | | Internet Indisponível |

## Cenário 05 - Upload de Arquivos

|     |  |  |
| --- || --------------------------- |
| Objetivo | | Fazer Upload de arquivos para o aplicativo |
| Contexto | | Local: Tela inicial após realizar login <br /> Tempo: Um a Cinco minutos <br /> Pré-condição: Estar Logado, Estar com o arquivo disponível no dispositivo |
| Atores | | Usuário logado |
| Recursos | | Internet <br /> Smartphone <br /> Conta Cadastrada <br /> App Hígia instalado <br /> Arquivo no Smartphone |
| Episódios | | Usuário acessa o app <br /> Usuário acessa o menu lateral <br /> Usuário escolhe a opção meus arquivos <br /> Usuário aperta o botão editar <br /> Usuário aperta o botão adicionar arquivo <br /> Usuário escolhe o arquivo a partir da pasta do smartphone <br /> Usuário confirma a adição do arquivo |
| Episódios Alternativos | | Não existe episódio alternativo |
| Restrição | | Internet Indisponível |

## Cenário 06 - Exclusão de perfil

|     |  |  |
| --- || --------------------------- |
| Objetivo | | Excluir perfil cadastrado no Hígia|
| Contexto | | Local: Tela de configurações <br /> Tempo: Um a três minutos <br /> Pré-condição: Estar logado |
| Atores | | Usuário logado |
| Recursos | | Internet <br /> Smartphone <br /> Conta Cadastrada <br /> App Hígia instalado |
| Episódios | | Usuário acessa o app <br /> Usuário acessa o menu lateral <br /> Usuário escolhe a opção de configurações <br /> Usuário seleciona a opção de excluir perfil <br /> Usuário confirma a escolha de excluir perfil |
| Episódios Alternativos | | Usuário cancela o processo de exclusão de perfil |
| Restrição | | Internet Indisponível |

## Cenário 07 - Download de Arquivos

|     |  |  |
| --- || --------------------------- |
| Objetivo | | Fazer download de arquivos salvos no app |
| Contexto | | Local: Tela de arquivos <br /> Tempo: Um a Cinco minutos <br /> Pré-condição: Estar Logado, já ter feito upload de algum arquivo |
| Atores | | Usuário com Login ativo |
| Recursos | | Internet <br /> Smartphone <br /> Conta Cadastrada <br /> App Hígia instalado |
| Episódios | | Usuário acessa o app <br /> Usuário acessa o menu lateral <br /> Usuário escolhe a opção de meus arquivos <br /> Usuário procura o arquivo desejado <br /> Usuário aperta o botão de download |
| Episódios Alternativos | | Não existe episódio alternativo |
| Restrição | | Internet Indisponível |

## Cenário 08 - Buscar paciente

|     |  |  |
| --- || --------------------------- |
| Objetivo | | Usuário médico deseja encontrar dados de um paciente específico |
| Contexto | | Local: Tela de busca de pacientes <br /> Tempo: Um a três minutos <br /> Pré-condição: Estar logado, ser usuário médico |
| Atores | | Usuário com Login ativo |
| Recursos | | Internet <br /> Smartphone <br /> Conta médica Cadastrada <br /> App Hígia instalado |
| Episódios | | Usuário acessa o app <br /> Usuário acessa menu lateral <br /> Usuário seleciona opção de “Buscar Paciente” <br /> Usuário insere CPF do paciente que deseja encontrar <br /> Usuário encontra dados gerais de paciente buscado |
| Episódios Alternativos | | Não existe episódio alternativo |
| Restrição | | Internet Indisponível <br /> CPF inválido|

## Cenário 09 - Buscar paciente

|     |  |  |
| --- || --------------------------- |
| Objetivo | | Acessar os arquivos médicos de um paciente |
| Contexto | | Local: Tela de busca de pacientes <br /> Tempo: Um a Cinco minutos <br /> Pré-condição: Estar logado, ser usuário médico |
| Atores | | Usuário com Login ativo |
| Recursos | | Internet <br /> Smartphone <br /> Conta médica Cadastrada <br /> App Hígia instalado |
| Episódios | | Usuário acessa o app <br /> Usuário acessa menu lateral <br /> Usuário seleciona opção de “Buscar Paciente” <br /> Usuário insere CPF do paciente que deseja encontrar <br /> Usuário aperta o botão de solicitar permissão |
| Episódios Alternativos | | Usuário acessa o app <br /> Usuário acessa menu lateral <br /> Usuário seleciona opção de “Buscar Paciente” <br /> Usuário insere CPF do paciente que deseja encontrar <br /> Usuário aperta o botão ‘ficha médica’ <br /> Usuário aperta o botão de solicitar permissão <br /> |
| Restrição | | Internet Indisponível <br /> CPF inválido|

## Cenário 10 - Conceder permissão

|     |  |  |
| --- || --------------------------- |
| Objetivo | | Conceder acesso de arquivos a um médico solicitante |
| Contexto | | Local: App hígia <br /> Tempo: Dez a cinquenta segundos <br /> Pré-condição: Estar conectado a internet |
| Atores | | Usuário paciente com Login ativo |
| Recursos | | Internet <br /> Smartphone <br /> App Hígia instalado |
| Episódios | | Usuário recebe notificação de solicitação de acesso <br /> Usuário acessa o app <br /> Usuário permite acesso |
| Episódios Alternativos | | Usuário rejeita o acesso |
| Restrição | | Internet Indisponível|

## Referências
Uso de cenário para especificação de requisitos. https://www.devmedia.com.br/uso-de-cenarios-para-especificacao-de-requisitos-de-qualidade-e-avaliacao-de-arquitetura-revista-engenharia-de-software-magazine-41/22528. Último acesso em: 15/02/2021.

