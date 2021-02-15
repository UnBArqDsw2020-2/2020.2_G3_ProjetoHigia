# Estimativas

## COCOMO (COnstructive COst MOdel)

O método COCOMO é um modelo de estimativa do tempo de desenvolvimento de um software. É baseado no estudo de sessenta e três projetos. Os programas examinaram de 2.000 a 100.000 linhas de código em linguagens de programação de Assembly a PL/I.

O COCOMO consiste em três implementações:

- **Básico**: Computa o esforço e o custo de desenvolvimento considerando uma estimativa do tamanho do programa.

- **Intermediário**: Computa o esforço e o custo de desenvolvimento considerando uma estimativa do tamanho do programa e um conjunto de direcionadores de custo.

- **Avançado**: São incorporadas características da versão intermediária com uma avaliação de impacto de custo em cada passo de todo o projeto.

## Tabela

COLOCAR TEXTO

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
            <td bgcolor="#9ea0a3" align="center" colspan=7>ATRIBUTOS DO PRODUTO</td>
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
            <td bgcolor="#9ea0a3" align="center" colspan=7>ATRIBUTOS DO HARDWARE</td>
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
            <td bgcolor="#9ea0a3" align="center" colspan=7>ATRIBUTOS DE PESSOAL</td>
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
            <td bgcolor="#9ea0a3" align="center" colspan=7>ATRIBUTO DE PROJETO</td>
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
COLOCAR TEXTO

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
            <td bgcolor="#9ea0a3" align="center" colspan=7>ATRIBUTOS DO PRODUTO</td>
        </tr>
        <tr>
            <td>Confiabilidade exigida do software</td>
            <td>0.75</td>
            <td>0.88</td>
            <td bgcolor="#B12637" >1.00</td>
            <td>1.15</td>
            <td>1.40</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Tamanho do banco de dados</td>
            <td>-</td>
            <td>0.94</td>
            <td>1.00</td>
            <td bgcolor="#B12637">1.08</td>
            <td>1.16</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Complexidade do produto</td>
            <td>0.70</td>
            <td>0.85</td>
            <td bgcolor="#B12637">1.00</td>
            <td>1.15</td>
            <td>1.30</td>
            <td>1.65</td>
        </tr>
        <tr>
            <td bgcolor="#9ea0a3" align="center" colspan=7>ATRIBUTOS DO HARDWARE</td>
        </tr>
        <tr>
            <td>Restrições ao tempo de execução</td>
            <td>-</td>
            <td>-</td>
            <td bgcolor="#B12637">1.00</td>
            <td>1.11</td>
            <td>1.30</td>
            <td>1.66</td>
        </tr>
        <tr>
            <td>Restrições de memória</td>
            <td>-</td>
            <td>-</td>
            <td bgcolor="#B12637">1.00</td>
            <td>1.06</td>
            <td>1.21</td>
            <td>1.56</td>
        </tr>
        <tr>
            <td>Volatilidade do ambiente de máquina</td>
            <td>-</td>
            <td>0.87</td>
            <td bgcolor="#B12637">1.00</td>
            <td>1.15</td>
            <td>1.30</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Tempo de turnaround (tempo para completar o ciclo) exigido</td>
            <td>-</td>
            <td>0.87</td>
            <td bgcolor="#B12637">1.00</td>
            <td>1.07</td>
            <td>1.15</td>
            <td>-</td>
        </tr>
        <tr>
            <td bgcolor="#9ea0a3" align="center" colspan=7>ATRIBUTOS DE PESSOAL</td>
        </tr>
        <tr>
            <td>Capacidade do analista</td>
            <td>1.46</td>
            <td>1.19</td>
            <td bgcolor="#B12637">1.00</td>
            <td>0.86</td>
            <td>0.71</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Experiência em aplicações</td>
            <td>1.29</td>
            <td>1.13</td>
            <td bgcolor="#B12637">1.00</td>
            <td>0.91</td>
            <td>0.82</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Capacidade do programador</td>
            <td>1.42</td>
            <td>1.17</td>
            <td bgcolor="#B12637">1.00</td>
            <td>0.86</td>
            <td>0.70</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Experiência em Máquina Virtual</td>
            <td bgcolor="#B12637">1.21</td>
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
            <td bgcolor="#B12637">0.95</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td bgcolor="#9ea0a3" align="center" colspan=7>ATRIBUTO DE PROJETO</td>
        </tr>
        <tr>
            <td>Uso de práticas modernas de programação</td>
            <td>1.24</td>
            <td>1.10</td>
            <td>1.00</td>
            <td bgcolor="#B12637">0.91</td>
            <td>0.82</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Uso de ferramentas de software</td>
            <td>1.24</td>
            <td>1.10</td>
            <td>1.00</td>
            <td>0.91</td>
            <td bgcolor="#B12637">0.83</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Cronograma exigido de desenvolvimento</td>
            <td>1.23</td>
            <td>1.08</td>
            <td>1.00</td>
            <td>1.04</td>
            <td bgcolor="#B12637">1.10</td>
            <td>-</td>
        </tr>
    </tbody>
</table>
COLOCAR TEXTO

### Estimativa de Esforço

Nosso projeto é do tipo Semidestacado de nível intermediário, logo, os valores utilizados dentro dos multiplicadores serão de **a = 3.00** e **b = 1.12**

Para KLOC = Z
E = a x Z^b x fae



## Referências

[1] FIGUEIREDO, Eduardo, **Modelo COCOMO II**, Disponível em: <<https://homepages.dcc.ufmg.br/~figueiredo/disciplinas/aulas/modelo-cocomo_v01.pdf>>, Último acesso em: 15 de fevereiro, 2021.

[2] **Stock**, Disponível em: <<https://unbarqdsw.github.io/2020.1_G12_Stock/#/Project/Evaluation>>, Último acesso: 15 de fevereiro, 2021.

[3] **Método COCOMO**, Disponível em: <<https://pt.wikipedia.org/wiki/M%C3%A9todo_COCOMO>>, Último acesso: 15 de fevereiro, 2021.

[4] **Monitoria**, Disponível em: https://2019-2-arquitetura-desenho.github.io/wiki/dinamica_seminario_I/estimativas_de_custo/, Último acesso: 15 de fevereiro, 2021.

## Histórico de versionamento

|    Data    | Versão |         Descrição         |                                             Autor(es)                                             |
| :--------: | :----: | :-----------------------: | :-----------------------------------------------------------------------------------------------: |
| 15/02/2021 |  0.1   |   Criação do documento    | [Danillo Souza](https://github.com/DanilloGS) e [Victor Amaral](https://github.com/VictorAmaralc) |
| 15/02/2021 |  1.0   | Aplicação das estimativas | [Danillo Souza](https://github.com/DanilloGS) e [Victor Amaral](https://github.com/VictorAmaralc) |
