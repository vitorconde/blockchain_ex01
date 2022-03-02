# Blockchain 01
## Curso Udemy - Blockchain com Node.js: Construa a sua Blockchain ! exercício 01


>- Passo a passo:
```
1) Criar arquivo tipo block.js

2) Criar objetos do tipo bloco
    - Constructor do bloco

3) Realizar uma conversão para string da classe

4) Criar a classe teste.js

5) Criar Bloco Genesis

6) Criar mineBlock

7) Adicionar o crypto-js

8) Utilizando o SHA256 (npm i crypto-js)

9) Módulo Jest para Arquivos de Testes (npm i jest --save-dev)
- Foi configurado o arquivo package.json 
  "scripts":{"test":"jest --watchALL"} (o que indica que todos os arquivos com test devem ser testados pelo script block.test.js)
- npm run test
- 

```

>- Explicação teórica:
```
# Conceito de Bloco
Nessa aula, será feita a unidade fundamental do blockchain, no caso o Bloco.
O bloco é composto por 4 tipos de dados fundamentais
- timestamp
- last hash (hash do bloco anterior)
- hash (é o valor especial do bloco, que é gerado por uma combinação de dados únicos)
- dados (por exemplo transação bancária)

Os dados de lastHash e de hash podem ter até 32 dígitos, utilizaremos uma função substring para limitar o display dos dados

# Conceito de Bloco Genesis
O bloco de Origem da blockchain, valores padrão para o timestamp, lastHash, hash, data

# SHA256 (crypto-js)
Algoritmo seguro de hash, security hash agreement, 256 - bits (32 bytes) = 32 caracteres.
Características : vai produzir um valor especial de 256 bits, e dado o mesmo timestamp, lastHash e o data vai produzir sempre o mesmo output.

# Adicionando módulo Jest
    describe('Block', () => {

        it('sets the `data` to match the input',() => {});

    });
O primeiro IT - Faz uma comparação entre o data do arquivo e o que seria o data field do bloco
O segundo IT - Faz uma comparação do hash do arquivo com o lastHash do ultimo bloco 
```

Conceitos da Blockchain - Revisão
```
Chain - Corrente : Array de blocos, o primeiro bloco desse array é o Genesis, que habilita a blockchain a adicionar um bloco no array de blocos.
```