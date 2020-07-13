# Markdown Links

## Índice

* [1. Sobre](#1-Sobre)
* [2. Funcionamento](#2-Funcionamento)
* [3. Instalação](#3-Instalação)
* [4. Implementações futuras](#4-Implementações-futuras)


***

## 1. Sobre

Essa biblioteca lê arquivos em liguagem de marcação [Markdown](https://pt.wikipedia.org/wiki/Markdown) e retorna URLs e título dos links presentes no texto. 

* Instalável pelo terminal 
* É executável pela linha de comando 


## 2. Funcionamento

A biblioteca lê um arquivo Markdown da preferência do usuário utilizando o [File System do Node.js](https://nodejs.org/api/fs.html) e retorna as URLs presentes no arquivo e seus respectivos títulos. Para identificar cada link e seu respectivo título está biblioteca procura [expressões regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions).


## 3. Instalação

Para executar essa biblioteca é necessário já ter em sua máquina o [NodeJS](https://nodejs.org/en/) e o [npm](https://www.npmjs.com/) instalados.

**Instalação pelo terminal** 

` $ npm install -g nicolefranca/SAP004-md-links `

**Uso**

No terminal é possível executar através do comando: 

` $ md-links <caminho-do-arquivo> `

Por exemplo:

` $ md-links ./some/example.md `

Para verificar se os links são válidos, execute o comando:

` $ md-links ./some/example.md --validate `

**No código** 

É possível usar a biblioteca importando com `require` e o resultado será um array de objetos com duas propriedades:

* `text:` Texto
* `href:` URL

## 4. Implementações futuras

Atualmente essa biblioteca apenas indentifica os links no documento Markdown. Para as próximas versões, deseja-se implementar as estatísticas(Stats) dos links.
