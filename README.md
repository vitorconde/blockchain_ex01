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
```

>- Explicação teórica:
```
# Conceito de Bloco
Nessa aula, será feita a unidade fundamental do blockchain, no caso o Bloco.
O bloco é composto por 4 tipos de dados fundamentais
- timestamp
- last hash (hash do bloco anterior)
- hash (é o valor especial do bloco, que é gerado por uma combinação de dados unicos)
- dados (por exemplo transação bancária)

Os dados de lastHash e de hash podem ter até 32 digitos, utilizaremos uma função substring para limitar o display dos dados

# Conceito de Bloco Genesis
O bloco de Origem da blockchain, valores padrão para o timestamp, lasthash, hash, data
```