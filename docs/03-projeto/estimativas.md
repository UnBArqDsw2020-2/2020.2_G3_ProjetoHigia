# Estimativas

## Histórico de versões

|    Data    | Versão |          Descrição           |                                                                     Autor(es)                                                                      |
| :--------: | :----: | :--------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------: |
| 15/02/2021 |  0.1   |     Criação do documento     |                         [Danillo Souza](https://github.com/DanilloGS) e [Victor Amaral](https://github.com/VictorAmaralc)                          |
| 15/02/2021 |  1.0   |  Aplicação das estimativas   | [Arthur Paiva](https://github.com/ArthurPaivaT), [Danillo Souza](https://github.com/DanilloGS) e [Victor Amaral](https://github.com/VictorAmaralc) |
| 16/02/2021 |  1.1   | Desenvolvimento do documento | [Arthur Paiva](https://github.com/ArthurPaivaT), [Danillo Souza](https://github.com/DanilloGS) e [Victor Amaral](https://github.com/VictorAmaralc) |


## COCOMO (COnstructive COst MOdel)

O método COCOMO é um modelo de estimativa do tempo de desenvolvimento de um software. É baseado no estudo de sessenta e três projetos. Os programas examinaram de 2.000 a 100.000 linhas de código em linguagens de programação de Assembly a PL/I.

O COCOMO consiste em três implementações:

- **Básico**: Computa o esforço e o custo de desenvolvimento considerando uma estimativa do tamanho do programa.

- **Intermediário**: Computa o esforço e o custo de desenvolvimento considerando uma estimativa do tamanho do programa e um conjunto de direcionadores de custo.

- **Avançado**: São incorporadas características da versão intermediária com uma avaliação de impacto de custo em cada passo de todo o projeto.

O COCOMO é separado em três classes distintas:

- **Orgânico**: projetos simples, com conjuntos de requisitos não tão rígidos, possuem equipes pequenas e experientes.
- **Semidestacado**: projetos intermediários, com alguns requisitos rígidos, com níveis mistos de experiência nas equipes.
- **Embutido**: projetos com conjunto rígido de restrições operacionais, tanto de hardware, quanto de software.

## COCOMO Intermediário

De acordo com as caracteristicas do Projeto Hígia, a classificação definida foi **COCOMO intermediário**. Sabendo disso, os atributos que serão levados em conta para o cálculo das estimativas estão representados na tabela abaixo.

<table>
    <thead>
        <tr bgcolor="#B12637">
            <th style="color:#FFF">Direcionadores de Custo</th>
            <th style="color:#FFF">Muito Baixo</th>
            <th style="color:#FFF">Baixo</th>
            <th style="color:#FFF">Normal</th>
            <th style="color:#FFF">Elevado</th>
            <th style="color:#FFF">Muito Elevado</th>
            <th style="color:#FFF">Extremamente Elevado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td bgcolor="#C73320" style="color:#fff" align="center" colspan=7>ATRIBUTOS DO PRODUTO</td>
        </tr>
        <tr>
            <td>Confiabilidade exigida do software</td>
            <td>0.75</td>
            <td>0.88</td>
            <td>1.00</td>
            <td>1.15</td>
            <td>1.40</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Tamanho do banco de dados</td>
            <td>-</td>
            <td>0.94</td>
            <td>1.00</td>
            <td>1.08</td>
            <td>1.16</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Complexidade do produto</td>
            <td>0.70</td>
            <td>0.85</td>
            <td>1.00</td>
            <td>1.15</td>
            <td>1.30</td>
            <td>1.65</td>
        </tr>
        <tr>
            <td bgcolor="#C73320" style="color:#fff" align="center" colspan=7>ATRIBUTOS DO HARDWARE</td>
        </tr>
        <tr>
            <td>Restrições ao tempo de execução</td>
            <td>-</td>
            <td>-</td>
            <td>1.00</td>
            <td>1.11</td>
            <td>1.30</td>
            <td>1.66</td>
        </tr>
        <tr>
            <td>Restrições de memória</td>
            <td>-</td>
            <td>-</td>
            <td>1.00</td>
            <td>1.06</td>
            <td>1.21</td>
            <td>1.56</td>
        </tr>
        <tr>
            <td>Volatilidade do ambiente de máquina</td>
            <td>-</td>
            <td>0.87</td>
            <td>1.00</td>
            <td>1.15</td>
            <td>1.30</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Tempo de turnaround (tempo para completar o ciclo) exigido</td>
            <td>-</td>
            <td>0.87</td>
            <td>1.00</td>
            <td>1.07</td>
            <td>1.15</td>
            <td>-</td>
        </tr>
        <tr>
            <td bgcolor="#C73320" style="color:#fff" align="center" colspan=7>ATRIBUTOS DE PESSOAL</td>
        </tr>
        <tr>
            <td>Capacidade do analista</td>
            <td>1.46</td>
            <td>1.19</td>
            <td>1.00</td>
            <td>0.86</td>
            <td>0.71</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Experiência em aplicações</td>
            <td>1.29</td>
            <td>1.13</td>
            <td>1.00</td>
            <td>0.91</td>
            <td>0.82</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Capacidade do programador</td>
            <td>1.42</td>
            <td>1.17</td>
            <td>1.00</td>
            <td>0.86</td>
            <td>0.70</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Experiência em Máquina Virtual</td>
            <td>1.21</td>
            <td>1.10</td>
            <td>1.00</td>
            <td>0.90</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Experiência com a linguagem de programação</td>
            <td>1.14</td>
            <td>1.07</td>
            <td>1.00</td>
            <td>0.95</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td bgcolor="#C73320" style="color:#fff" align="center" colspan=7>ATRIBUTO DE PROJETO</td>
        </tr>
        <tr>
            <td>Uso de práticas modernas de programação</td>
            <td>1.24</td>
            <td>1.10</td>
            <td>1.00</td>
            <td>0.91</td>
            <td>0.82</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Uso de ferramentas de software</td>
            <td>1.24</td>
            <td>1.10</td>
            <td>1.00</td>
            <td>0.91</td>
            <td>0.83</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Cronograma exigido de desenvolvimento</td>
            <td>1.23</td>
            <td>1.08</td>
            <td>1.00</td>
            <td>1.04</td>
            <td>1.10</td>
            <td>-</td>
        </tr>
    </tbody>
</table>

## Resultado

### Pesos de classificação de acordo com a tabela

<table>
    <thead>
        <tr bgcolor="#B12637">
            <th style="color:#FFF">Direcionadores de Custo</th>
            <th style="color:#FFF">Muito Baixo</th>
            <th style="color:#FFF">Baixo</th>
            <th style="color:#FFF">Normal</th>
            <th style="color:#FFF">Elevado</th>
            <th style="color:#FFF">Muito Elevado</th>
            <th style="color:#FFF">Extremamente Elevado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td bgcolor="#C73320" style="color:#fff" align="center" colspan=7>ATRIBUTOS DO PRODUTO</td>
        </tr>
        <tr>
            <td>Confiabilidade exigida do software</td>
            <td>0.75</td>
            <td>0.88</td>
            <td bgcolor="#C73320" style="color:#fff" >1.00</td>
            <td>1.15</td>
            <td>1.40</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Tamanho do banco de dados</td>
            <td>-</td>
            <td>0.94</td>
            <td>1.00</td>
            <td bgcolor="#C73320" style="color:#fff">1.08</td>
            <td>1.16</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Complexidade do produto</td>
            <td>0.70</td>
            <td>0.85</td>
            <td bgcolor="#C73320" style="color:#fff">1.00</td>
            <td>1.15</td>
            <td>1.30</td>
            <td>1.65</td>
        </tr>
        <tr>
            <td bgcolor="#C73320" style="color:#fff" align="center" colspan=7>ATRIBUTOS DO HARDWARE</td>
        </tr>
        <tr>
            <td>Restrições ao tempo de execução</td>
            <td>-</td>
            <td>-</td>
            <td bgcolor="#C73320" style="color:#fff">1.00</td>
            <td>1.11</td>
            <td>1.30</td>
            <td>1.66</td>
        </tr>
        <tr>
            <td>Restrições de memória</td>
            <td>-</td>
            <td>-</td>
            <td bgcolor="#C73320" style="color:#fff">1.00</td>
            <td>1.06</td>
            <td>1.21</td>
            <td>1.56</td>
        </tr>
        <tr>
            <td>Volatilidade do ambiente de máquina</td>
            <td>-</td>
            <td>0.87</td>
            <td bgcolor="#C73320" style="color:#fff">1.00</td>
            <td>1.15</td>
            <td>1.30</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Tempo de turnaround (tempo para completar o ciclo) exigido</td>
            <td>-</td>
            <td>0.87</td>
            <td bgcolor="#C73320" style="color:#fff">1.00</td>
            <td>1.07</td>
            <td>1.15</td>
            <td>-</td>
        </tr>
        <tr>
            <td bgcolor="#C73320" style="color:#fff" align="center" colspan=7>ATRIBUTOS DE PESSOAL</td>
        </tr>
        <tr>
            <td>Capacidade do analista</td>
            <td>1.46</td>
            <td>1.19</td>
            <td bgcolor="#C73320" style="color:#fff">1.00</td>
            <td>0.86</td>
            <td>0.71</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Experiência em aplicações</td>
            <td>1.29</td>
            <td>1.13</td>
            <td bgcolor="#C73320" style="color:#fff">1.00</td>
            <td>0.91</td>
            <td>0.82</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Capacidade do programador</td>
            <td>1.42</td>
            <td>1.17</td>
            <td bgcolor="#C73320" style="color:#fff">1.00</td>
            <td>0.86</td>
            <td>0.70</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Experiência em Máquina Virtual</td>
            <td bgcolor="#C73320" style="color:#fff">1.21</td>
            <td>1.10</td>
            <td>1.00</td>
            <td>0.90</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Experiência com a linguagem de programação</td>
            <td>1.14</td>
            <td>1.07</td>
            <td>1.00</td>
            <td bgcolor="#C73320" style="color:#fff">0.95</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td bgcolor="#C73320" style="color:#fff" align="center" colspan=7>ATRIBUTO DE PROJETO</td>
        </tr>
        <tr>
            <td>Uso de práticas modernas de programação</td>
            <td>1.24</td>
            <td>1.10</td>
            <td>1.00</td>
            <td bgcolor="#C73320" style="color:#fff">0.91</td>
            <td>0.82</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Uso de ferramentas de software</td>
            <td>1.24</td>
            <td>1.10</td>
            <td>1.00</td>
            <td>0.91</td>
            <td bgcolor="#C73320" style="color:#fff">0.83</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Cronograma exigido de desenvolvimento</td>
            <td>1.23</td>
            <td>1.08</td>
            <td>1.00</td>
            <td>1.04</td>
            <td bgcolor="#C73320" style="color:#fff">1.10</td>
            <td>-</td>
        </tr>
    </tbody>
</table>

Com isso, o resultado do peso que será utilizado equivale a multiplicação dos fatores selecionados. Sendo assim, será usado um fae = 1.03

### Estimativa de Quantidade de Linhas de Código

<table>
    <thead>
        <tr bgcolor="#B12637">
            <th style="color:#FFF">Feature</th>
            <th style="color:#FFF">Média FrontEnd</th>
            <th style="color:#FFF">Média Backend</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Login</td>
            <td>85</td>
            <td>53.3</td>
        </tr>
        <tr>
            <td>Cadastro</td>
            <td>150</td>
            <td>66.6</td>
        </tr>
        <tr>
            <td>Perfil Médico (Add dado)</td>
            <td>150</td>
            <td>50</td>
        </tr>
        <tr>
            <td>Perfil Médico (Editar dado)</td>
            <td>150</td>
            <td>50</td>
        </tr>
        <tr>
            <td>Perfil Médico (Remover dado)</td>
            <td>150</td>
            <td>50</td>
        </tr>
        <tr>
            <td>Perfil Médico (Add Arquivo)</td>
            <td>150</td>
            <td>60</td>
        </tr>
        <tr>
            <td>Perfil Médico (Editar Arquivo)</td>
            <td>160</td>
            <td>66.6</td>
        </tr>
        <tr>
            <td>Perfil Médico (Remover Arquivo)</td>
            <td>133.3</td>
            <td>50</td>
        </tr>
        <tr>
            <td>Pesquisar Paciente</td>
            <td>166,6</td>
            <td>166.6</td>
        </tr>
        <tr>
            <td>Notificar pedido de acesso a perfil completo</td>
            <td>216,6</td>
            <td>266,6</td>
        </tr>
        <tr>
            <td>Download de arquivo</td>
            <td>183,3</td>
            <td>60</td>
        </tr>
        <tr>
            <td>Upload de arquivo</td>
            <td>183,3</td>
            <td>60</td>
        </tr>
        <tr>
            <td>Total</td>
            <td>1878,3</td>
            <td>1000</td>
        </tr>
    </tbody>
</table>

### Estatísticas das Estimativas de Linhas de Código

<table>
    <thead>
        <tr bgcolor="#B12637">
            <th style="color:#FFF">Média</th>
            <th style="color:#FFF">Desvio Padrão</th>
            <th style="color:#FFF">Variação Para Menos</th>
            <th style="color:#FFF">Variação Para Mais</th>
        </tr>
    </thead>
    <tbody>
            <tr>
            <td>2878</td>
            <td>103.23</td>
            <td>2760</td>
            <td>2950</td>
        </tr>
    </tbody>
</table>

Tendo uma média de 2878 linhas de código e o Kloc como a média de linhas dividido por 1000, temos Kloc = 2.878

### Cálculo da Estimativa do Esforço

O resultado do esforço representa o valor de Pessoas/Mês, o COCOMO Intermediário usa a seguinte equação para a estimativa do esforço:

```
E = a x S^b x fae
```

onde:

- E: é o esforço aplicado (em pessoas-mês).
- S: é o número (estimado) de linhas de código para o projeto (em milhares).
- a: é um coeficiente fornecido pela Tabela.
- b: é um expoente fornecido pela Tabela.
- fae: é o Fator de Ajustamento do Esforço (multiplicação de cada um dos Multiplicadores de Esforço fornecidos pela Tabela).

Tabela para os valores dos coeficientes "a" e "b" de acordo com o tipo do projeto, a mesma tabela utilizada no COCOMO básico:

| Projeto de Software |   a   |   b   |   c   |   d   |
| :-----------------: | :---: | :---: | :---: | :---: |
|      Orgânico       | 2.40  | 1.05  | 2.50  | 0.38  |
|    Semidestacado    | 3.00  | 1.12  | 2.50  | 0.35  |
|      Embutido       | 3.60  | 1.20  | 2.50  | 0.32  |

Nosso projeto é do tipo Semidestacado de nível intermediário, logo, os valores utilizados dentro dos multiplicadores serão de **a = 3.00** e **b = 1.12**

```
Equação:
E = a x Z^b x fae

Substituindo os Valores:
E = 3 x 2.878^1.12 x 1.03

Resultado:
E = 10.09 pessoas / mês

```

### Estimativa de Tempo

Utiliza o resultado calculado do esforço para calcular o tempo, pois estão diretamente relacionados, também utiliza o coeficiente **c = 2.50** e **d = 0.35** da tabela (Para projeto semidestacado):

Para Kloc (E) =  2.88


```
Equação:
T = c x E ^ d

Substituindo Valores:
T = 2.5 x 2.88^0.35

Resultado:
T = 3,62 Meses

```

## Referências

[1] FIGUEIREDO, Eduardo, **Modelo COCOMO II**, Disponível em: <<https://homepages.dcc.ufmg.br/~figueiredo/disciplinas/aulas/modelo-cocomo_v01.pdf>>, Último acesso em: 15 de fevereiro, 2021.

[2] **Stock**, Disponível em: <<https://unbarqdsw.github.io/2020.1_G12_Stock/#/Project/Evaluation>>, Último acesso: 15 de fevereiro, 2021.

[3] **Método COCOMO**, Disponível em: <<https://pt.wikipedia.org/wiki/M%C3%A9todo_COCOMO>>, Último acesso: 15 de fevereiro, 2021.

[4] **Monitoria**, Disponível em: https://2019-2-arquitetura-desenho.github.io/wiki/dinamica_seminario_I/estimativas_de_custo/, Último acesso: 15 de fevereiro, 2021.
