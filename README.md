
![alt text](image.png)

# 🇧🇷 Genre BR

> _Prevê o gênero (masculino/feminino) de nomes brasileiros usando uma Rede Neural Artificial treinada com dados do IBGE._

---

## O que é?

O **Genre BR** é uma biblioteca Node.js que utiliza **Machine Learning** (através do [`brain.js`](https://github.com/BrainJS/brain.js)) para analisar a estrutura e a terminação de nomes brasileiros. Diferente de um simples banco de dados onde os nomes são consultados, esta ferramenta aprendeu os padrões linguísticos (como combinações de vogais e consoantes típicas de cada gênero) e consegue determinar se um nome é estatisticamente masculino ou feminino, tendo sucesso até mesmo com nomes raros ou inventados.

## Como instalar

Como o projeto é um pacote Node.js, você pode instalá-lo em seu projeto:

```bash
npm install br-gender-info
```

Não se esqueça de instalar as dependências locais se for rodar no próprio repositório para mexer com o modelo:

```bash
npm install
```

## Como Usar

A API é simples e direta. Ela expõe a função `getGenderInfo()`, que recebe um nome como parâmetro e retorna um objeto detalhado com o resultado da predição.

```javascript
// Exemplo de uso em outro projeto:
const { getGenderInfo } = require("br-gender-info");

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


## Como Funciona (A Arquitetura da Rede)

Ao abrir o modelo gerado em `src/model.json`, você verá a matemática construída pela inteligência artificial. Como funciona estruturalmente este projeto nos bastidores?

#### 1. `sizes` (A Estrutura)

```json
"sizes": [7, 16, 8, 2]
```

Define o formato da rede neural (suas camadas de "neurônios"):

- **7 (Camada de Entrada):** Recebe os dados. Como este projeto analisa as últimas `7` letras de um nome, temos `7` portas de entrada.
- **16 e 8 (Camadas Ocultas):** Onde acontece o processamento real de "Deep Learning". É aqui que a rede desvenda os padrões complexos de sílabas e fonemas no idioma português.
- **2 (Camada de Saída):** O resultado final condensado em 2 possibilidades (probabilidade de ser Masculino ou Feminino).

#### 2. `layers` (Memória e Aprendizado)

O maior bloco do arquivo. Contém a matemática pura que a rede aprendeu durante o treinamento, dividido em vários objetos que incluem:

- **`weights` (Pesos):** Representam a "força" da conexão entre um neurônio e outro. Se uma determinada terminação (ex: "son" de _Gleison_) está fortemente ligada ao gênero masculino, os cálculos registrarão um peso positivo bem alto.
- **`bias` (Viés):** A predisposição ou inclinação natural daquele neurônio específico para disparar ou não; é como a "intuição" da rede sobre como lidar antes da conta de pesos atuar sobre o neurônio.

#### 3. `activation` (Função de Ativação)

```json
"activation": "sigmoid"
```

É a fórmula matemática contínua usada para decidir o estado final que é passado entre as conexões. A função _Sigmoide_ converte imensos cálculos numéricos de soma de pesos para o intervalo fixo e seguro entre **0** e **1**. Isso nos permite obter resultados com cara de porcentagem (ex: `0.85` na variável correspondente representa 85% de `certainty`).

#### 4. `outputLookup` (Nomenclatura da Saída)

```json
"outputLookup": true
```

Uma funcionalidade essencial no `brain.js`. Em vez de entregar o resultado sem contexto computacional `[0.12, 0.98]`, define e força as chaves do objeto com texto, resultando em retornos limpos como `.male` ou `.female`.

#### 5. `trainOpts` (Configurações do Laboratório de Treino)

Reflete as configurações dadas durante o aprendizado:

- **`iterations`**: O limite máximo de vezes ("épocas") permitidas para a rede ver todos os dados de nomes do IBGE continuamente até parar.
- **`learningRate`**: O tamanho do passo de ajuste (o quão drasticamente a matemática muda cada peso quando erra as previsões durante os ajustes iniciais).
- **`errorThresh`**: A margem de erro aceitável para o algoritmo decidir que "já está inteligente o suficiente" e encerrar voluntariamente os repetitivos treinos das épocas.

---

_Desenvolvido com `brain.js` e dados originais do **IBGE**._
