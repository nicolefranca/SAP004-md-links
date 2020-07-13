#!/usr/bin/env node
const mdLinks = require("./lib/index.js");
const path = process.argv[2];
const option = process.argv[3];

mdLinks(path, option)
    .then((arrRes) => {
        console.log(`O caminho do arquivo é: ${path}`)
        arrRes.forEach(link => {
            console.log(link.href, link.title, link.statusCode, link.statusText);
        })
    })
    .catch(console.error)
