# GoFs Criacional

## Histórico de versionamento

|    Data    | Versão | Descrição | Autor(es) |
| :--------: | :----: | :-------: | :-------: |
| 21/03/2021 | 0.1 | Criação do GoF Singleton | [Danillo Souza](https://github.com/danillogs) e [Fellipe Araujo](https://github.com/fellipe-araujo) |

## Singleton

<p style="text-align: justify;"> &emsp;&emsp;
O objetivo principal do padrão de projeto GoF Singleton é garantir que uma classe tenha apenas uma única instância e que forneça um acesso global a essa mesma instância. Esse padrão de projeto é muito útil quando queremos ter o controle de acesso a recursos compartilhadps como, por exemplo, uma base de dados de uma aplicação.
</p>

### Estrutura Genérica

![basicStructureSingleton](../assets/images/05-padroesDeProjeto/GoFCriacional/basicStructureSingleton.png)

### Pontos positivos

- Pelo fato das classes nunca mudarem de estado e possuírem somente uma instância executando, melhora o desempenho e qualidade do software;
- O código se torna mais legível.

### Pontos negativos

- Caso o software não vá utilizar com frequencia a classe que implementa esse padrão, pode trazer problemas de desempenho;
- Torna mais complexo a realização de testes unitários.

### Aplicação

<p style="text-align: justify;"> &emsp;&emsp;
Em nosso Backend, criamos uma classe especialista em personalizar o Express (Framework especializado na construção de aplicações web e API's) a SetupServer. A SetupServer foi idealizada com o objetivo de tornar o arquivo de nosso servidor mais limpo. O único propósito dessa classe é subir o servidor de nossa API, portanto, a mesma é instanciada uma única vez e de forma global. 
</p>

![singleton](../assets/images/05-padroesDeProjeto/GoFCriacional/singleton.png)

## Referências

- Refactoring.Guru. Acesso em: https://refactoring.guru/pt-br/design-patterns/singleton. Último de acesso: 21/03/2021.
- Projeto Recipebuk. Acesso em: https://www.recipebukdocs.tk/#/05-padroes-de-projeto/Estudos/gof-criacional?id=estudo-dirigido-gofs-criacional. Último de acesso: 21/03/2021.
- Projeto Stock. Acesso em: https://unbarqdsw.github.io/2020.1_G12_Stock/#/DesignPatterns/Singleton?id=aplica%c3%a7%c3%a3o-do-singleton. Último de acesso: 21/03/2021.