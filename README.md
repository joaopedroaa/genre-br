![alt text](image.png)

# Genre BR ~95.56%

> _Prevê o gênero (masculino/feminino) de nomes brasileiros usando uma Rede Neural Artificial treinada com dados do IBGE._

---

## O que é?

O **Genre BR** é uma biblioteca Node.js que utiliza **Machine Learning** (através do [`brain.js`](https://github.com/BrainJS/brain.js)) para analisar a estrutura e a terminação de nomes brasileiros. Diferente de um simples banco de dados onde os nomes são consultados, esta ferramenta aprendeu os padrões linguísticos (como combinações de vogais e consoantes típicas de cada gênero) e consegue determinar se um nome é estatisticamente masculino ou feminino, tendo sucesso até mesmo com nomes raros ou inventados.

## Como instalar

Como o projeto é um pacote Node.js, você pode instalá-lo em seu projeto:

```bash
npm install gender-br
```

Não se esqueça de instalar as dependências locais se for rodar no próprio repositório para mexer com o modelo:

```bash
npm install
```

## Como Usar

A API é simples e direta. Ela expõe a função `getGenderInfo()`, que recebe um nome como parâmetro e retorna um objeto detalhado com o resultado da predição.

```javascript
// Exemplo de uso em outro projeto:
const { getGenderInfo } = require("gender-br");

// Se estiver testando dentro da própria pasta do repositório, use:
// const { getGenderInfo } = require("./src/index");

try {
  const resultado = getGenderInfo("João");
  console.log(resultado);
} catch (error) {
  console.error(error.message);
}

/*
Saída Esperada:
{
  name: 'João',
  male: true,
  female: false,
  certainty: '99.8%'
}
*/
```
