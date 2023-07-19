# Meu Gerador Lorem Ipsum :memo:

[![npm version](https://img.shields.io/npm/v/meu-gerador-lorem-ipsum.svg)](https://www.npmjs.com/package/meu-gerador-lorem-ipsum)

Um pacote simples para gerar texto Lorem Ipsum aleatório. :pencil:

## Instalação :inbox_tray:

Certifique-se de ter o Node.js e o npm instalados. Execute o seguinte comando para instalar a package:

```shell
npm install meu-gerador-lorem-ipsum
```
## Uso :rocket:
```js
const generateLoremIpsum = require('meu-gerador-lorem-ipsum');

const loremIpsumText = generateLoremIpsum(200);
console.log(loremIpsumText);
```
O código acima importa o gerador de Lorem Ipsum e o usa para gerar um texto com 200 caracteres, que é então exibido no console.

    generateLoremIpsum(length)

Gera um texto Lorem Ipsum com o comprimento especificado. :page_with_curl:

    length (opcional): O comprimento do texto a ser gerado. O valor padrão é 100.

## Contribuição :raised_hands:

Contribuições são bem-vindas! Para propor uma alteração, siga estas etapas:

    Fork este repositório.
    Crie um branch para a sua funcionalidade (git checkout -b minha-funcionalidade).
    Faça as alterações desejadas.
    Commit suas alterações (git commit -m 'Adicionar minha funcionalidade').
    Faça o push para o branch (git push origin minha-funcionalidade).
    Abra uma Pull Request.

## Licença :scroll:

Este projeto é licenciado nos termos da licença [MIT](https://github.com/FabricioFacco/LoremIps-Gen/edit/main/README.md)
