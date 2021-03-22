# GoFs Comportamentais

## Histórico de versionamento

|    Data    | Versão |                    Descrição                     |                      Autor(es)   |
| :--------: | :----: | :----------------------------------------------: | :-------------------------------------------------------------------------------------------------: |
| 22/03/2021 |  0.1   |             Criação do documento GoF Comportamental        | [Arthur Paiva](https://github.com/arthurpaivat), [Aline Lermen](https:/github.com/alinelermen) e [Fellipe Araujo](https://github.com/fellipe-araujo)  |
| 22/03/2021 |  0.2   |             Adição de exemplos da aplicação        | [Arthur Paiva](https://github.com/arthurpaivat), [Aline Lermen](https:/github.com/alinelermen) e [Fellipe Araujo](https://github.com/fellipe-araujo)  |


## Observer
<p style="text-align: justify;"> &emsp;&emsp;
O padrão GoF Observer é um padrão de projeto comportamental que permite definir um mecanismo de assinatura para notificar múltiplos objetos sobre quaisquer eventos que aconteçam com o objeto que eles estão observando.
</p>

### Pontos positivos
- *Princípio aberto/fechado*. É possível introduzir novas classes assinantes sem ter que mudar o código da publicadora (e vice versa se existe uma interface publicadora);
- É possível estabelecer relações entre objetos durante a execução.


### Pontos negativos
- Os assinantes são notificados em ordem aleatória.


### Aplicação

-  Subject

![Auth Subject](../assets/images/05-padroesDeProjeto/GoFComportamental/authController.png)

- Controller

![Auth Controller](../assets/images/05-padroesDeProjeto/GoFComportamental/authSubject.png)


## Referências

- Projeto Diário da Saúde. Acesso em: https://unbarqdsw.github.io/2020.1_G5_Diario_da_Saude/#gofs_comportamentais/. Último de acesso: 22/03/2021.
- Refactoring.Guru. Acesso em: https://refactoring.guru/pt-br/design-patterns/observer. Último de acesso: 22/03/2021.